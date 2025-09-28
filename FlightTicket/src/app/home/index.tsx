import { ImageBackground, View, Text } from 'react-native';
import { styles } from './styles';
import { colors } from '@/styles/colors';
import { Flight } from '@/components/flight';
import { Ionicons } from "@expo/vector-icons"
import { Info } from '@/components/info';
import QrCode from "react-native-qrcode-svg"
import Svg, { Line, Circle } from 'react-native-svg';

export function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.header} source={require("@/assets/viagem.jpg")}>
                <Text style={styles.title}>Cartão de Embarque</Text>
                <Text style={styles.subtitle}>Falta 15 dias para sua viagem</Text>
            </ImageBackground>

            <View style={styles.ticket}>

                <View style={styles.content}>
                    <View style={styles.flight}>
                        <Flight label="Fortaleza" value="FOR" />
                        <View style={styles.duration}>
                            <Ionicons name="airplane-sharp" size={32} color={colors.black} />
                            <Text style={styles.hours}>
                                3h 30m
                            </Text>
                        </View>
                        <Flight label="São Paulo" value="GRU" />
                    </View>
                    <Text style={styles.label}>Passageiro</Text>
                    <Text style={styles.name}>Alison Alves</Text>

                    <View style={styles.details}>
                        <View style={styles.inline}>

                            <Info label='Data' value='13 de Out.' />
                            <Info label='Embarque' value='16:42' />
                        </View>
                    </View>
                </View>

                <View>
                    <Svg height={20} width="100%">
                        <Line
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        stroke={colors.gray[400]}
                        strokeWidth={1}
                        strokeDasharray="5,5"
                        />
                        <Circle r={8} cx="0%" cy="50%" fill={colors.black} />
                        <Circle r={8} cx="100%" cy="50%" fill={colors.black} />
                    </Svg>
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerContent}>
                        <View style={styles.inline}>
                            <Info label="Voo" value='AD 2571' />
                            <Info label="Assento" value='12A' />
                        </View>
                        <View style={styles.inline}>
                            <Info label="Terminal" value='2' />
                            <Info label="Portão" value='B15' />
                        </View>
                    </View>
                    <QrCode value='boarding code' size={130} />
                </View>
            </View>
        </View>
    );
}

;
