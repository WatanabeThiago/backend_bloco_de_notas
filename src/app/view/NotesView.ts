import Note from '../models/Note';

export default {
    render(note: Note) {
        return {
            note_id: note.note_id,
            note_name: note.note_name,
            note_text: note.note_text,
            
            
        };
    },

    renderMany(notes: Note[]) {
        return notes.map((note) => this.render(note));
    },
};