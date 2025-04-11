import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

const Index = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [isPosting, setIsPosting] = useState(false);
    const [error, setError] = useState("");
    const fetchData = async (limit = 10) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
            );
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Fetch error:", error);
            setIsLoading(false);
            setError("Failed to fetch post lists!")
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addPost = async () => {
        if (!postTitle || !postBody) return;

        setIsPosting(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    title: postTitle,
                    body: postBody,
                }),
            });

            const newPost = await response.json();
            setPosts([newPost, ...posts]);
            setPostTitle("");
            setPostBody("");
        } catch (error) {
            console.error("Post error:", error);
            setError("Filed to add new posts.")
        } finally {
            setIsPosting(false);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        await fetchData(20);
        setRefreshing(false);
    };

    if (isLoading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            error ? (
            <View style={styles.errorContainer}><Text style={styles.errorText}>{error}</Text></View>
            ) : (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Post Title"
                    value={postTitle}
                    onChangeText={setPostTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Post Body"
                    value={postBody}
                    onChangeText={setPostBody}
                />
                <Button
                    title={isPosting ? "Adding..." : "Add Post"}
                    onPress={addPost}
                    disabled={isPosting}
                />
            </View>

            <View style={styles.listContainer}>
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.bodyText}>{item.body}</Text>
                        </View>
                    )}
                    ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                    ListEmptyComponent={() => <Text>No Posts Available</Text>}
                    ListHeaderComponent={() => (
                        <Text style={styles.headerText}>Post List</Text>
                    )}
                    ListFooterComponent={() => (
                        <Text style={styles.footerText}>End of Lists</Text>
                    )}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                />
            </View>
            )
        </SafeAreaView>
    );
};

export default Index;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
    titleText: {
        fontSize: 30,
    },
    bodyText: {
        fontSize: 24,
        color: "#666666",
    },
    headerText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 12,
    },
    footerText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 12,
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: "light-blue",
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 8,
        padding: 8,
        borderRadius: 8,
    },
    errorContainer: {
        backgroundColor: "#ffff",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16,
        alignItems: "center"
    },
    errorText: {
        color: "#D8000C",
        fontSize: 16,
        textAlign: "center"
    }
});
