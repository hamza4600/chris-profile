/* eslint-disable @next/next/no-img-element */
"use client"
import { PlayIcon } from 'lucide-react';
import React, { useState } from 'react';

const testimonials = [
    {
        name: "Warren",
        video: "https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev/client-testimonial-3.mp4",
        image : "https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev/Warren.webp"
    },
    {
        name: "Brenda Syson",
        video: "https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev/client-testimonial-2.mp4",
        image : "https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev/Brenda.png"
    },
    {
        name: "Evan",
        video: "https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev/client-testimonial-1.mp4",
        image : "https://pub-f3904ae1bf834a09a44d1c4ad718470e.r2.dev/Evan.webp"
    },

]
const Testimonial = () => {
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);

    const handleVideoClick = async (videoName: string) => {
        // First stop the current video if any is playing
        if (playingVideo) {
            const currentVideo = document.querySelector(`video[title="${playingVideo} testimonial"]`) as HTMLVideoElement;
            if (currentVideo) {
                currentVideo.pause();
                currentVideo.currentTime = 0;
            }
        }
        
        // Set the new video as playing
        setPlayingVideo(videoName);
        
        // Start playing the new video
        const newVideo = document.querySelector(`video[title="${videoName} testimonial"]`) as HTMLVideoElement;
        if (newVideo) {
            try {
                await newVideo.play();
            } catch (error) {
                console.error('Error playing video:', error);
                setPlayingVideo(null);
            }
        }
    };

    return (    
        <section className="text-white mt-20" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="dark:text-primary text-[#000000] md:text-[38px] text-[30px] leading-[1.2em] -tracking-[0.5px] text-center mb-12 max-w-[800px] mx-auto">
                 Big brands trust our small, expert team for digital excellence. Hear what our clients say.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className="relative border-2 border-none rounded-xl overflow-hidden">
                            <video 
                                controls
                                preload="none"
                                title={testimonial.name + " testimonial"} 
                                src={testimonial.video} 
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                                    playingVideo === testimonial.name ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                                onEnded={() => setPlayingVideo(null)}
                                autoPlay={playingVideo === testimonial.name}
                            />
                            <div 
                                onClick={() => handleVideoClick(testimonial.name)}
                                className={`relative z-5 cursor-pointer transition-opacity duration-300 ${
                                    playingVideo === testimonial.name ? 'opacity-0 pointer-events-none' : 'opacity-100'
                                }`}
                            >
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    width={630}
                                    height={356}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">

                                    <div className="bg-white bg-opacity-80 rounded-full p-4">
                                        <PlayIcon className="h-8 w-8 text-gray-900" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>  
            </div>
        </section>
    )
}


export default Testimonial;
