import { Image, StyleSheet, View, Text } from "react-native";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/about-img.png")}
                style={styles.img}
                resizeMode="cover"
            />
            <Text style={styles.name}>Gustavo Carvalho Noia</Text>
            <Text style={styles.email}>gustavocarvalho1997@hotmail.com</Text>
            <Text style={styles.description}>
                Desenvolvedor fullstack formado em Análise e desenvolvimento de
                sistemas na FIAP
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: "#CCCCCC",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 16,
        color: "#333333",
    },
    email: {
        fontSize: 16,
        marginTop: 8,
        color: "#555555",
    },
    description: {
        fontSize: 14,
        marginTop: 12,
        color: "#777777",
        textAlign: "center",
        paddingHorizontal: 20,
    },
});
