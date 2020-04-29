import React, { useContext, useMemo } from 'react';
import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ProjectsFront2 } from './projects_front/projects_front2';
import { ProjectsBack2 } from './projects_back/projects_back2';
import { AddButton } from './add_button_rounded/add_button_rounded';
import { ProjectDialog2 } from './project_dialog/project_dialog2';

import { mapProjectsFromJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { validateProjectsComplete } from './data/validator';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';
import { useMode } from '../../../hooks/use_mode';

const ProjectsCardComponent = ({ variant, side }) => {
    const [mode] = useMode();
    const { data, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapProjectsFromJsonResume(data), [data]);

    const isComplete = useMemo(() => validateProjectsComplete(mappedData), [mappedData]);

    const currentSide = useMemo(() => {
        if (!isComplete && !isEditing) {
            return SIDES.FRONT;
        }
        return side;
    }, [side, isComplete, isEditing]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }
    return (
        <ProfileCard
            kind="projects2"
            data={mappedData}
            isComplete={isComplete}
            isEditingProfile={isEditing}
            sides={{
                front: (props) => <ProjectsFront2 {...props} />,
                back: (props) => <ProjectsBack2 {...props} />
            }}
            variant={variant}
            side={currentSide}
            customEditAction={(props) => <AddButton title="Ajouter un projet" {...props} />}
            editDialog={{
                component: ProjectDialog2,
                data: {}
            }}
        />
    );
};

export const Projects2Card = ProjectsCardComponent;
