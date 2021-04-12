

/**
 * @description This function checks whether or not a CSS class is visibile on the DOM at the current moment in time.
 * @param cssElementClassNametName CSS Element on the DOMs class name.
 */
export function visibileOnViewport(cssElementClassName: string): boolean {
    const element = document.querySelector('.' + cssElementClassName);;
    const bounds = element.getBoundingClientRect();

    return (
        bounds.top >= 0 &&
        bounds.left >= 0 &&
        bounds.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounds.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
