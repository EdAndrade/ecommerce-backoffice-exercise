export const StorageManager = {

    store: 'app!@$!@#321',

    decode(json){
        return JSON.parse(json);
    },

    encode(json){
        return JSON.stringify(json);
    },

    get({key}){
        if(typeof window !== 'undefined'){
            let store = localStorage.getItem(this.store)
            store = this.decode(store)
            return store[key];
        }
    },

    set({ key, value }){

        if(typeof window !== 'undefined'){
            let store = localStorage.getItem(this.store)
            store = this.decode(store);
            

            if( key && value){
                store[key] = value
                localStorage.setItem( this.store, this.encode(store) );
                return true;
            }else{
                return false
            }
            
        }
    },

    seeder(){
        if(typeof window !== 'undefined'){

            if( !localStorage.getItem(this.store) ){
                window.localStorage.setItem(this.store, this.encode({}))
            }
        }
    }
} 