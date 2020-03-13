export default class CreateScript {
    constructor(src) {
        this.src = src;
    }

    createScript = () => {
        const script = document.createElement('script');
        script.async = true;
        script.src = this.src;
        document.body.appendChild(script);
    };

    getSrc = () => this.src;
}
