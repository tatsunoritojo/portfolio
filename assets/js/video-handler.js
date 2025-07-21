// Video background handler for smooth playback

class VideoBackgroundHandler {
    constructor() {
        this.video = null;
        this.init();
    }
    
    init() {
        // Wait for DOM to load
        document.addEventListener('DOMContentLoaded', () => {
            this.setupVideo();
        });
    }
    
    setupVideo() {
        this.video = document.querySelector('.contact-video-background video');
        
        if (!this.video) return;
        
        // Preload and setup smooth playback
        this.video.addEventListener('loadeddata', () => {
            console.log('Video loaded successfully');
        });
        
        this.video.addEventListener('canplaythrough', () => {
            // Ensure smooth playback
            this.video.play().catch(error => {
                console.log('Auto-play prevented:', error);
                // Fallback: try to play when user interacts
                this.setupUserInteractionPlay();
            });
        });
        
        // Handle video errors
        this.video.addEventListener('error', (e) => {
            console.error('Video error:', e);
        });
        
        // Ensure loop continuity
        this.video.addEventListener('ended', () => {
            this.video.currentTime = 0;
            this.video.play();
        });
        
        // Optimize performance
        this.video.addEventListener('loadstart', () => {
            this.video.playbackRate = 1.0; // Normal speed
        });
        
        // Handle visibility changes to maintain smooth playback
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible' && this.video.paused) {
                this.video.play().catch(console.log);
            }
        });
    }
    
    setupUserInteractionPlay() {
        const playOnInteraction = () => {
            if (this.video && this.video.paused) {
                this.video.play().catch(console.log);
                document.removeEventListener('click', playOnInteraction);
                document.removeEventListener('touchstart', playOnInteraction);
            }
        };
        
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
    }
    
    // Method to ensure continuous playback
    maintainPlayback() {
        if (this.video && this.video.paused) {
            this.video.play().catch(console.log);
        }
    }
}

// Initialize video handler
const videoHandler = new VideoBackgroundHandler();

// Export for potential use elsewhere
window.VideoBackgroundHandler = VideoBackgroundHandler;