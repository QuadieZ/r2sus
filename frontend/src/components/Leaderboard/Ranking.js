import { useMemo, useState } from "react"
import RankingItem from "./RankingItem"
import { Stack } from "@chakra-ui/react"
import { isEmpty } from "lodash"
import axios from "axios"

const mockCurrentUserId = 'test004'

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
    const [data, setData] = useState([])
    useMemo(() => axios.get("https://r2sus-backend.herokuapp.com/api/rank/", {
        header: {
            'Access-Control-Allow-Origin': 'https://r2sus-backend.herokuapp.com/',
        },
    }).then((res) => setData(res.data)).catch((err) => console.error(err)), [])

    const rankedData = sortByRanking(data)
    console.log(rankedData)
    const currentData = findCurrentUserData(rankedData, mockCurrentUserId)

    return (
        <Stack px={4}>
            {!isEmpty(currentData) && <RankingItem {...currentData} isCurrentUser my={4} />}
            {rankedData.map(el => (<RankingItem {...el} key={el.rank} />))}
        </Stack>
    )
}