import html from '../js/core.js';
import { connect } from '../js/store.js';
import TodoItem from './TodoItem.js';

const connector = connect()

function Main({todos, filter ,filters}) {
    return html`
    <section class="main">
        <input 
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox"
        onchange = "dispatch('toggleAll', checked)"
        ${todos.every(filters.completed) && 'checked'}
        >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            ${todos.filter(filters[filter]).map((todo, index) => TodoItem({todo, index}))}
        </ul>
    </section>
    `
}

export default connector(Main)