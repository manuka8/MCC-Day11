import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';

export default function Home() {
    const navigation = useNavigation();
    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text variant="headlineLarge">Headline Large</Text>
                    <Divider />
                    <Text variant="bodyMedium" style={styles.body}>
                        As the evening unfolded, the last light of day lingered in the sky, turning the clouds into soft hues of 
                        pink and lavender. The once-bustling city had quieted down, with only a few cars humming along the streets
                         and the distant murmur of voices from a nearby café. On the outskirts of town, a small meadow stretched 
                         out, its grass swaying gently in the cool evening breeze. The air was fresh, carrying the scent of earth
                          and pine, mingling with the faint fragrance of wildflowers that dotted the landscape. A small stream 
                          wound its way through the meadow, its crystal-clear waters glistening in the fading light, creating a
                           soothing, melodic sound as it gently cascaded over smooth stones. Birds, now preparing to settle for
                            the night, darted across the sky in graceful arcs, their silhouettes etched against the colorful 
                            backdrop. In the distance, the outline of the forest stood tall, dark and mysterious, as if guarding 
                            the secrets of the land. Beneath the canopy of trees, the forest floor was a carpet of fallen leaves, 
                            their crisp crunch adding to the symphony of nature’s sounds. The quiet stillness of the place held a 
                            sense of timelessness, as if the world here had always been and would always remain in peaceful 
                            harmony. As the first stars began to twinkle in the vast sky, the night embraced the earth with a 
                            calm that seemed to slow the very pulse of life, allowing a brief moment of serenity in a world that 
                            never stopped moving.
                    </Text>
                    <Button icon="camera" mode="outlined" onPress={() => navigation.navigate('contact')}>
                        Contact Us
                    </Button>
                    <Button icon="camera" mode="outlined" onPress={() => navigation.navigate('aboutus')}>
                        About Us
                    </Button>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10
    },
    body: {
        padding: 8,
        textAlign: 'justify'
    },
    scrollView: {
        flexGrow: 1, 
    },
});