import { useState } from "react";
import Particles from "react-particles";
import {loadFireworksPreset} from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

function App() {
    const [newYearMessage, setNewYearMessage] = useState(["さようなら、2023年。素晴らしい一年であったことを願っています。"]);

    const particleInitialization = async (main) => {
        await loadFireworksPreset(main);
    }

    const timeLeft = () => {
        const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
        const newDate = new Date().getTime();
        const remainingTime = newYearDate - newDate
        return remainingTime
    }

	return (
		<>
			<Particles
            init={particleInitialization}
            options={{ preset: "fireworks" }}
            />
        <div className="flex flex-col justify-center items-center min-h-screen gap-10">
    <span className="text-white text-4xl font-bold z-50">
        <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"✨"}
            cursor
        />
    </span>

    <div className="z-50 text-white text-4xl font-bold">
        <Countdown
            date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(["新しい一年が、あなたとあなたの家族に幸福と健康をもたらします"])}
        />
    </div>

    <span className="text-white text-2xl z-50 font-medium">Agar Silaturahmi 🤝Tidak Terputus Pinjam Dulu Seratus 💵</span>
</div>
        

		</>
	);
}

export default App;
