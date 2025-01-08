export default function Modal({ isOpen, onClose, children, gameOver }) {
  if (!isOpen) return null;

  if (!gameOver) return (
    <div
      className="modal-foreground"
    >
      <h2>Pokémemory</h2>
      <p>Select difficulty...</p>
      {children}
      <div
        onClick={onClose}
        className="modal-background"
      >
      </div>
    </div>
  )

  else return (
    <div
      className="modal-foreground"
    >
      <h2>Game Over!</h2>
      <p>Play again?</p>
      {children}
      <div
        onClick={onClose}
        className="modal-background"
      >
      </div>
    </div>
  )
}