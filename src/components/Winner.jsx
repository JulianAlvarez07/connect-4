import React from 'react'

const Winner = (winner) => {
  return (
    <div>
      {winner && (
              <p className="text-xl font-bold mt-4">
                Ganó {winner === "🔴" ? "Rojo" : "Amarillo"} 🎉
              </p>
            )}
    </div>
  )
}

export default Winner
