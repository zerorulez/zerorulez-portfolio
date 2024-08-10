import { motion } from "framer-motion";

function App({ data }: { data: string }) {
  const text = data.split(" ");

  return (
    <>
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </>
  );
}

export default App;
