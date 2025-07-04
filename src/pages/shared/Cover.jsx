import { Parallax } from 'react-parallax';
export default function Cover({ coverImg, title }) {
    return (

        <Parallax
            blur={{ min: -100, max: 100 }}
            bgImage={coverImg}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </Parallax>



    )
}
