class Public {
    listeners = {

    }

    subscribe(name, callback) {
       
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }
        const isExist = this.listeners[name].some(item => item == callback);
        if (!isExist) { 
            this.listeners[name].push((data) => callback(data));
        }

        console.log(this.listeners[name], isExist);
    }

    notify(name, data) {
        console.log(name, data, this.listeners);
        
        this.listeners[name].forEach(item => {
            console.log(item)
            item(data);
        });
    }

    unSubscribe(name, callback) {
        this.listeners[name].forEach((item, idx) => {
            if (callback == item) {
                this.listeners[name].splice(idx, 1);
            }
        });
    }
}

const event = new Public();

export default event;