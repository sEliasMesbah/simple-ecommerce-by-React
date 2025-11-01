import { useEffect, useState, useContext } from "react";
import WishListCard from "./WishListCard";
import { AuthContext } from "../../context/AuthContext"; // مسیر دقیق رو اصلاح کن

export default function WishListMain() {
    const { user } = useContext(AuthContext);
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        if (!user) return;

        fetch(`http://localhost:3001/wishlists/${user.id}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.items) setLikes(data.items);
                else setLikes([]);
            })
            .catch(() => setLikes([]));
    }, [user]);

    const handleRemove = async (id) => {
        if (!user) return;

        const updatedItems = likes.filter(item => item.id !== id);

        const response = await fetch(`http://localhost:3001/wishlists/${user.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: updatedItems })
        });

        if (response.ok) {
            setLikes(updatedItems);
        }
    };

    return (
        <div className="page-content space-top p-b80">
            <div className="container">
                <div className="row g-3">
                    {likes.length > 0 ? (
                        likes.map((like) => (
                            <WishListCard key={like.id} data={like} onRemove={handleRemove} />
                        ))
                    ) : (
                        <p className="text-center text-muted">لیست علاقه‌مندی‌ها خالی است.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
