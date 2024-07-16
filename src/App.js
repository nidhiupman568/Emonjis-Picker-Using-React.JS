// Filename - App.js
 
import React, { useState } from "react";
import Picker from "emoji-picker-react";
 
export default function Emoji() {
    const [chosenEmoji, setChosenEmoji] = useState(null);
 
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        console.log(emojiObject.target);
    };
 
    return (
        <div>
            <h3>GeeksforGeeks Emoji Picker</h3>
            {chosenEmoji ? (
                <span>
                    Your Emoji:
                    <img
                        style={{ width: "15px" }}
                        src={chosenEmoji.target.src}
                    />
                </span>
            ) : (
                <span>No Emoji</span>
            )}
            <Picker onEmojiClick={onEmojiClick} />
        </div>
    );
}