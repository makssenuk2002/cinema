import {FC} from "react";
import {TypeMaterialIconName} from "@/shared/types/icon.type";
import * as MaterialIcons from 'react-icons/md'
const MaterialIcon:FC<{name: TypeMaterialIconName}> =({name})=> {
    // @ts-ignore
    const IconComponent = MaterialIcons[name]
    return <IconComponent/>
 }
export default MaterialIcon