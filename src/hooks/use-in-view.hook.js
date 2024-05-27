import { useInView } from 'react-intersection-observer';

export const useInViewHook = (viewPercentage) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: viewPercentage, // Trigger when 50% of the element is in view
    });
    return { ref, inView };
};