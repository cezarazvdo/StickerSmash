import { StyleSheet, Image, ImageSourcePropType } from "react-native";

interface Props {
    placeholderImageSource: ImageSourcePropType
}

export const ImageViewer = ({ placeholderImageSource }: Props) => {
    return (
        <Image style={styles.image} source={placeholderImageSource} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})