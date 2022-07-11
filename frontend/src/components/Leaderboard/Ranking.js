import { useMemo, useState } from "react"
import RankingItem from "./RankingItem"
import { Stack } from "@chakra-ui/react"
import { isEmpty } from "lodash"
import axios from "axios"

const mockCurrentUserId = 'test004'
const mockRankingData = [
    {
        userId: 'test001',
        username: 'user1',
        score: '12,500'
    },
    {
        userId: 'test002',
        username: 'user2',
        score: '11,400'
    },
    {
        userId: 'test003',
        username: 'user3',
        score: '9,300'
    },
    {
        userId: 'test004',
        username: 'user4',
        score: '9,100'
    },
    {
        userId: 'test005',
        username: 'user5',
        score: '13,500'
    },
    {
        userId: 'test006',
        username: 'user6',
        score: '13,500'
    },
    {
        userId: 'test007',
        username: 'user7',
        score: '12,000'
    },
    {
        userId: 'test008',
        username: 'user8',
        score: '10,050'
    },
    {
        userId: 'test009',
        username: 'user9',
        score: '8,800'
    },
    {
        userId: 'test010',
        username: 'user10',
        score: '7,000'
    },
    {
        userId: 'test011',
        username: 'user11',
        score: '13,050'
    },
    {
        userId: 'test012',
        username: 'user12',
        score: '9,050'
    },

]
const sortByRanking = (list) => {
    const sortedList = list.sort((a, b) => (parseInt(a.score) > parseInt(b.score)) ? -1 : 1)
    return sortedList.map((e, i) => ({ ...e, rank: i + 1 }))
}

const findCurrentUserData = (allData, currentId) => {
    let data = {}
    allData.forEach((el, i) => {
        if (el.userId === currentId) {
            data = allData[i]
        }
    })
    return data
}

export const Ranking = () => {
    //const [data, setData] = useState([])
    /*useMemo(() => axios.get("https://r2sus-backend.herokuapp.com/api/rank", (res, req) => {
        res.header = { "Access-Control-Allow-Origin": '*' }
        res.withCredentials = true
    }
    ).then((res) => setData(res.data)).catch((err) => console.error(err)), [])*/

    const rankedData = sortByRanking(mockRankingData)
    const currentData = findCurrentUserData(rankedData, mockCurrentUserId)

    return (
        <Stack px={4}>
            {!isEmpty(currentData) && <RankingItem {...currentData} isCurrentUser my={4} />}
            {rankedData.map(el => (<RankingItem {...el} key={el.rank} />))}
        </Stack>
    )
}