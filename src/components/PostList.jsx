import PostCard from './PostCard';

export default function PostList({ topicos }) {
    return (
        <div>
            {topicos.map((topico) => (
                <PostCard
                    key={topico.id}
                    topico={topico}
                />
            ))}
        </div>
    );
}
