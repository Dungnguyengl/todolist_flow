import storage from '../util/storage.js';

const intit = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    },
    editIndex: null
}

const actions = {
    add ({ todos }, title) {
        if (title != ''){
            todos.push({title, completed: false})
            storage.set(todos)
        }
    },
    toggle(state, index) {
        const todos = state.todos
        const todo = todos.filter(state.filters[state.filter])[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    toggleAll ({todos}, completed){
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    },
    destroy({todos}, index){
        todos.splice(index, 1)
        storage.set(todos)
    },
    switchFilter(state, type){
        state.filter = type
    },
    clear(state){
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    edit(state, index){
        const todos = state.todos
        state.editIndex = index
    },
    endEdit(state, title){
        if (state.editIndex !== null){
            if (title) {
                state.todos.filter(state.filters[state.filter])[state.editIndex].title = title;
                state.editIndex = null;
                storage.set(state.todos)
            }
        }
    },
    cancelEdit(state){
        state.editIndex = null;
    }
}

export default function reducer(state = intit, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}