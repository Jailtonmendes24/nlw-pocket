import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { IconProps as TableIconProps } from "@tabler/icons-react-native"

import { s } from "./styles"
import { colors } from "@/styles/theme"

type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean
}

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={[s.container, style]} activeOpacity={0.8} disabled={isLoading} {...rest}>
            {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
        </TouchableOpacity>
    )
}

function Title({ children }: TextProps) {
    return <Text style={s.title}>{children}</Text>
}

function Icon() {
    return 
}

Button.Title = Title

export { Button }