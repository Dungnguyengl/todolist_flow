const TODOS_STOGARE_KEY = 'TODOS'

export default {
    get() {
        
        return JSON.parse(localStorage.getItem(TODOS_STOGARE_KEY )) || []
    },
    set(todos) {
        localStorage.setItem(TODOS_STOGARE_KEY, JSON.stringify(todos))
    }
}