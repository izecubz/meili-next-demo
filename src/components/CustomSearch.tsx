import { connectSearchBox } from 'react-instantsearch-dom';
import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';
import { useRef } from 'react';

const CustomSearch = ({
  currentRefinement,
  refine
}: {
  currentRefinement: string;
  refine: any;
}) => {
  const inputRef = useRef<any>();
  const theme = useMantineTheme();

  return (
    <form
      noValidate
      action=""
      onSubmit={e => {
        e.preventDefault();
        console.log(inputRef.current.value);
        refine(inputRef.current.value);
      }}
      role="search"
    >
      <TextInput
        ref={inputRef}
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
        icon={<Search size={18} />}
        radius="xl"
        size="md"
        rightSection={
          <ActionIcon
            component="button"
            type="submit"
            size={32}
            radius="xl"
            color={theme.primaryColor}
            variant="filled"
          >
            {theme.dir === 'ltr' ? (
              <ArrowRight size={18} />
            ) : (
              <ArrowLeft size={18} />
            )}
          </ActionIcon>
        }
        placeholder="Search movies"
        rightSectionWidth={42}
      />
    </form>
  );
};

export default connectSearchBox(CustomSearch);
