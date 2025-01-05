import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Platform } from 'react-native';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { PaperProvider, Text, Divider, TextInput, Button } from 'react-native-paper';
export default function ContactUs() {
    const [name, setName] = useState();
    const navigation = useNavigation();
    return (
        <PaperProvider>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingView}
            >
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text variant="headlineLarge">Contact Us</Text>
                            <Divider />
                        </View>
                        <View style={styles.body}>
                            <Text variant='bodyMedium'>
                            The sun dipped below the horizon, casting a warm golden glow over the tranquil landscape. Birds chirped merrily in the distance, their songs blending harmoniously with the soft rustling of the leaves. A gentle breeze swept through the air, carrying the scent of fresh pine and wildflowers. In the distance, a lone figure walked along the path, their footsteps barely audible on the soft earth. The world seemed to slow down, as if taking a moment to appreciate the beauty of the quiet evening. The soft colors of the sky faded into deeper shades, signaling the arrival of nightfall.
                            </Text>
                            <View style={styles.input}>
                                <TextInput label="Name" mode='outlined' value={name} onChangeText={setName} />
                            </View>
                            <View style={styles.input}>
                                <TextInput label="Email" mode='outlined' keyboardType='email-address' />
                            </View>
                            <View style={styles.input}>
                                <TextInput label="Phone number" mode='outlined' keyboardType='phone-pad' />
                            </View>
                            <View style={styles.input}>
                                <TextInput label="Message" mode='outlined' multiline numberOfLines={5} />
                            </View>
                            <View style={styles.input}>
                                <Button mode='contained' onPress={()=>navigation.navigate('aboutus')}>
                                    About Us</Button>
                            </View>
                            <Text>{name}</Text>
                        </View>
                        <View style={styles.footer}>
                            <Text>MyApp © 2024</Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </PaperProvider>
    );
}

