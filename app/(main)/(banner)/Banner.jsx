import Image from 'next/image'
import styles from './Banner.module.css'
import { activityItems } from './data'
import Typewriter from "typewriter-effect";
const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bg} />
            <div className={styles.content}>
                <div className={styles.subject}>
                    <span className={styles.title}>Hey there . .</span>

                    <div className={styles.words}>
                        <span className={styles.code}>{`<code> `}</span>
                        <Typewriter
                            options={{
                                strings: [
                                    "I build website .",
                                    "I want to become a Freelance.",
                                    "My next goal is Web 3 .",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <span className={styles.code}>{` </code>`}</span>
                    </div>

                    {/* ACTIVITY  */}
                    <div className={styles.activity}>
                        {activityItems.map((item, index) => (
                            <Image key={index}
                                src={item.link}
                                alt={item.title}
                                title={item.title}
                                width={100}
                                height={100}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.forground}>
                    <img
                        src="fg.png"
                        alt="AmiReza Najari"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner
