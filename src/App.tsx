import { Alert } from "@mui/material";
import TagsTable from "./components/TagsTable";
import Wrapper from "./components/Wrapper";
import { useStackOverflowTags } from "./hooks/useStackOverflowTags";

function App() {
  const { loading, success, tags } = useStackOverflowTags();

  if (loading) {
    return (
      <Wrapper>
        <Alert severity="info">Loading tags...</Alert>
      </Wrapper>
    );
  }

  if (!success) {
    return (
      <Wrapper>
        <Alert severity="error">Whoops! Failed to load tags. Try again later.</Alert>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Wrapper
        sx={{
          maxWidth: 800,
          marginInline: "auto",
          paddingX: 2,
          paddingY: 4,
        }}
      >
        <TagsTable
          tags={tags.map((tag) => ({
            id: tag.name,
            content: tag.name,
            count: tag.count,
          }))}
        />
      </Wrapper>
    </Wrapper>
  );
}

export default App;
