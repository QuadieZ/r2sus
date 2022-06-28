import RankingItem from "./RankingItem"
import { Stack } from "@chakra-ui/react"
import { isEmpty } from "lodash"

const mockData = [
    { user_id: 1, name: 'SUS4', score: '12,000', profileImage: 'https://picsum.photos/200/200' },
    { user_id: 2, name: 'SUS1', score: '14,232', profileImage: 'https://picsum.photos/200/200' },
    { user_id: 3, name: 'SUS3', score: '13,232', profileImage: 'https://picsum.photos/200/200' },
    { user_id: 4, name: 'SUS2', score: '14,229', profileImage: 'https://picsum.photos/200/200' },
    { user_id: 5, name: 'SUS4', score: '12,000', profileImage: 'https://picsum.photos/200/200' },
    { user_id: 6, name: 'SUS1', score: '14,232', profileImage: 'https://picsum.photos/200/200' },
    { user_id: 7, name: 'SUS3', score: '13,232', profileImage: 'https://picsum.photos/200/200' },
    { user_id: 8, name: 'SUS2', score: '14,229', profileImage: 'https://picsum.photos/200/200' },
    { user_id: 9, name: 'SUS4', score: '12,000', profileImage: 'https://picsum.photos/200/200' },
    { user_id: 10, name: 'SUS1', score: '14,232', profileImage: 'https://picsum.photos/200/200' },
    { user_id: 11, name: 'SUS3', score: '13,232', profileImage: 'https://picsum.photos/200/200' },
    { user_id: 12, name: 'SUS2', score: '14,229', profileImage: 'https://picsum.photos/200/200' },
]

const mockCurrentUserId = 12

const sortByRanking = (list) => {
    const sortedList = list.sort((a, b) => (a.score > b.score) ? -1 : 1)
    return sortedList.map((e, i) => ({ ...e, rank: i + 1 }))
}

const findCurrentUserData = (allData, currentId) => {
    let data = {}
    allData.forEach((el, i) => {
        if (el.user_id === currentId) {
            data = allData[i]
        }
    })
    return data
}

export const Ranking = () => {
    const rankedData = sortByRanking(mockData)
    const currentData = findCurrentUserData(rankedData, mockCurrentUserId)

    return (
        <Stack px={4}>
            {!isEmpty(currentData) && <RankingItem {...currentData} isCurrentUser my={4} />}
            {rankedData.map(el => (<RankingItem {...el} key={el.rank} />))}
        </Stack>
    )
}