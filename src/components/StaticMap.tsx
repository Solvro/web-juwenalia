import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";


export default function StaticMap() {
    const [outside, setOutside] = useState(true)
    const [levelZero, setLevelZero] = useState(false)
    const [levelOne, setLevelOne] = useState(false)
    const [levelMinusOne, setLevelMinusOne] = useState(false)

    return (
        <div className="h-screen">
            <h1>Map Demo</h1>
            <div id="map-container">
                <div id="map">
                    <Image src="/hala-stulecia-zewnatrz.png" alt={"Hala Stulecia Widok Satelitarny"} width={1000} height={800} className={cn(outside ? "" : "invisible")} />
                    <Image src="/hala-stulecia-pietro-0.png" alt={"Hala Stulecia Parter"} width={1000} height={800} className={cn(levelZero ? "" : "invisible")} />
                    <Image src="/hala-stulecia-pietro-1.png" alt={"Hala Stulecia Piętro 1"} width={1000} height={800} className={cn(levelOne ? "" : "invisible")} />
                    <Image src="/hala-stulecia-piwnica.png" alt={"Hala Stulecia Piętro -1"} width={1000} height={800} className={cn(levelMinusOne ? "" : "invisible")} />
                </div>
                <div id="controls">
                    
                </div>
            </div>
        </div>
    );
}