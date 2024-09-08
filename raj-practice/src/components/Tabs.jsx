export const Tabs = ({ activeTab, handleTabClick, TabsTitle }) => {
  return (
    <>
      {TabsTitle.map((item, i) => (
        <h3
          className={`py-1 lg:py-2 px-8 rounded lg:text-lg snap-center font-semibold flex-none tracking-wide cursor-pointer border-2 border-primary ${
            activeTab === item.value
              ? "bg-primary text-white"
              : "text-primary"
          }`}
          onClick={() => handleTabClick(item.value)}
          key={i}
        >
          {item.title}
        </h3>
      ))}
    </>
  );
};
