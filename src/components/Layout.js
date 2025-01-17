import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme/useTheme';


const Layout = ({ children, style, ...rest }) => {
    const { theme } = useTheme();
    return (
        <SafeAreaView style={styles.container} {...rest}>
            <StatusBar
                animated
                backgroundColor={theme.cardBg}
                barStyle={theme?.name === 'light' ? 'dark-content' : 'light-content'}
            />
            <View
                testID="Layout.LayoutContainer"
                style={[styles.layout, { backgroundColor: theme?.layoutBg }, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default Layout;

const styles = StyleSheet.create({
    container: { flex: 1 },
    layout: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});