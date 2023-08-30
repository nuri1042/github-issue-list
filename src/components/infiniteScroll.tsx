const infiniteScroll = (callback: () => void) => {
  const handleScroll = async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      callback();
    }
  };
  return handleScroll;
};
export default infiniteScroll;
