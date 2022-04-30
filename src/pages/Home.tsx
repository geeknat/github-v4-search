import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {Avatar, Box, Button, Container, Grid} from "@mui/material";
import useDebounce from "../hooks/useDebounce";
import {SearchInput} from "../components/SearchInput";
import {Loader} from "../components/Loader";
import {UserFieldsFragment, useSearchLazyQuery} from "../graphql/generated";
import {UserItem} from "../components/UserItem";
import {numberFormatter} from "../utils/numberFormatter";

export const Home = () => {

    const [search, {data, loading, error}] = useSearchLazyQuery()

    const [query, setQuery] = useState('')

    const debouncedSearch = useDebounce(query, 500)

    useEffect(() => {
        debouncedSearch && search({
            variables: {
                query: debouncedSearch,
                endCursor: null,
                startCursor: null
            }
        })
    }, [debouncedSearch])

    const goToNextPage = useCallback(() => {
        search({
            variables: {
                query: debouncedSearch,
                endCursor: data?.search?.pageInfo?.endCursor,
                startCursor: null
            }
        })
    }, [data, debouncedSearch])

    const goToPreviousPage = useCallback(() => {
        search({
            variables: {
                query: debouncedSearch,
                startCursor: data?.search?.pageInfo?.startCursor,
                endCursor: null
            }
        })
    }, [data, debouncedSearch])


    return (
        <Box sx={styles.page}>
            <Box width={'100%'}
                 display={'flex'}
                 flexDirection={'row'}
                 justifyContent={'space-between'}
                 alignItems={'center'}
                 bgcolor={'#0B1929'}
                 position={'fixed'}
                 zIndex={999}
            >
                <Avatar sx={{mx: 4}}>G</Avatar>
                <SearchInput
                    value={query}
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setQuery(e.target.value)}
                />
            </Box>

            <Box pt={10} pb={3}>
                {loading &&
                <Loader label={'Searching...'}/>
                }

                {((!loading && debouncedSearch && !data?.search) || error) &&
                <Box component={'p'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    No results found
                </Box>
                }


                <Container>
                    {data?.search &&
                        <Box component={'p'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            {numberFormatter(data.search?.userCount)} results found
                        </Box>
                    }

                    <Box mt={2} mb={2}>
                        {data?.search?.nodes?.map((result) => {
                            const user = result as UserFieldsFragment
                            return <UserItem user={user} key={user?.databaseId}/>
                        })}
                    </Box>

                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                        {data?.search?.pageInfo?.hasPreviousPage &&
                        <Button variant="contained" onClick={goToPreviousPage}>
                            Previous
                        </Button>
                        }

                        {data?.search?.pageInfo?.hasNextPage &&
                        <Button variant="contained" onClick={goToNextPage}>
                            Next
                        </Button>
                        }
                    </Box>

                </Container>
            </Box>


        </Box>
    )
}

const styles = {
    page: {
        width: '100%',
        height: '100vh'
    },
}
