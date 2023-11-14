import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Edit.module.css';
import { createBook, updateBook } from '../../services/bookService.js';


const EditBook = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const book = location.state;
    const bookId = book._id
    const [editBook, setEditBook] = useState({
        title: book.title,
        author: book.author,
        genre: book.genre,
        image: book.image,
        price: book.price,
        description: book.description,
    });

    const changeHandler = (e) => {
        setEditBook(editBook => ({
            ...editBook,
            [e.target.name]: e.target.name == 'price' ? Number(e.target.value) : e.target.value
        }))
    }

    const onEdit = () => {
        updateBook(editBook, bookId)
            .then(response => {
                if (response == 200) {
                    navigate(`/details/${bookId}`)
                } else {
                    throw new Error('Unsuccessful update');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div className={styles.container}>
            <h2>Edit book</h2>
            <form>
                <div className={styles.formGroup}>
                    <label>Book name:</label>
                    <input type="text" name="title" value={editBook.title} onChange={changeHandler} />
                </div>
                <div className={styles.formGroup}>
                    <label>Author:</label>
                    <input type="text" name="author" value={editBook.author} onChange={changeHandler} />
                </div>
                <div className={styles.formGroup}>
                    <label>Genre:</label>
                    <input type="text" name="genre" value={editBook.genre} onChange={changeHandler} />
                </div>
                <div className={styles.formGroup}>
                    <label>Image URL:</label>
                    <input type="text" name="image" value={editBook.image} onChange={changeHandler} />
                </div>
                <div className={styles.formGroup}>
                    <label>Price:</label>
                    <input type="number" name="price" value={editBook.price} onChange={changeHandler} />
                </div>
                <div className={styles.formGroup}>
                    <label>Description:</label>
                    <textarea name="description" value={editBook.description} onChange={changeHandler} />
                </div>
                <button type="button" onClick={onEdit}>Save changes</button>
            </form>
        </div>
    );
};

export default EditBook;