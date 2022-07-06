import { Text, HStack, Image } from "@chakra-ui/react";

const RankingItem = (props) => {
    const { rank, profileImage, username, score, isCurrentUser, ...rest } = props;

    return (
        <HStack
            fontSize="sm"
            color="content.primary"
            justify="space-between"
            borderRadius={10}
            px="10%"
            py={3}
            bgColor={isCurrentUser && "bg.active"}
            {...rest}
        >
            <HStack justify="flex-start" gap={3}>
                <Text>#{rank}</Text>
                <HStack>
                    <Image src={profileImage ?? 'https://picsum.photos/200/200'} boxSize="5vh" borderRadius="full" />
                    <Text>{username}</Text>
                </HStack>
            </HStack>
            <Text>{score.replace(",", " ")}</Text>
        </HStack>
    );
};

export default RankingItem;
