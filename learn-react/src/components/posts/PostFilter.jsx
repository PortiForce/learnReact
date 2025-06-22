import React from "react";
import DefaultActionInput from "./../UI/input/DefaultActionInput.jsx";
import DefaultActionSelect from "./../UI/select/DefaultActionSelect.jsx";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <DefaultActionInput
        placeholder="search by..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <DefaultActionSelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="sort by..."
        title=""
        options={[
          { value: "id", name: "by date" },
          { value: "title", name: "by title" },
        ]}
      />
    </>
  );
};

export default PostFilter;
