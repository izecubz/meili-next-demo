import { connectSearchBox } from 'react-instantsearch-dom';
import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';

const CustomSearch = ({ currentRefinement, refine}: { currentRefinement: string; refine: any; }) => {
    const theme = useMantineTheme();

    return (
        <form noValidate action="" role="search">
            <TextInput
                type="search"
                value={currentRefinement}
                onChange={event => refine(event.currentTarget.value)}
                icon={<Search size={18} />}
                radius="xl"
                size="md"
                rightSection={
                    <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                        {theme.dir === 'ltr' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
                    </ActionIcon>
                }
                placeholder="Search questions"
                rightSectionWidth={42}
            />
        </form>
    );
}

export default connectSearchBox(CustomSearch);
