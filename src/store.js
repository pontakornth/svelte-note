import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const initialState = writable({
  currentIndex: 0,
  pages: [{
    title: 'Example',
    content: '# Example',
    uuid: uuidv4(),
  },
  {
    title: 'Other example',
    content: 'You can change page',
    uuid: uuidv4(),
  }
  ]
});

function createNotes() {
  const { subscribe, set, update } = initialState;
  return {
    subscribe,
    set,
    update,
    newPage: () => {
      update(notes => ({
        ...notes,
        pages:[...notes.pages, {
          title: 'Untitled',
          content: '',
          uuid: uuidv4(),
        }]
        }
        )
      )
    },
    deleteAll: () => {
      update(notes => ({
        ...notes,
        pages: []
      }
      )
     )
    }
  }
}

export const notes = createNotes();