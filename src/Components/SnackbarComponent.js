import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MyComponent = ({ message }) => {
    const [visible, setVisible] = React.useState(true);
    //const [isLoading, setIsLoading] = React.useState(false);

    //const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    //Automatically dismisses after 3 seconds
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onDismissSnackBar();
        }, 3000);

        // Cleanup the timer if the component unmounts or Snackbar is dismissed manually
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Undo',
                        onPress: () => {
                            // Do something
                        },
                    }}>
                    {message}
                </Snackbar>
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default MyComponent;