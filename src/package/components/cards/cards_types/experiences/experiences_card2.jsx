import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ExperiencesFront2 } from './experiences_front/experiences_front2';
import { ExperiencesBack2 } from './experiences_back/experiences_back2';
import { ExperiencesEditDialog } from './experiences_edit_dialog/experiences_edit_dialog';
import { validateWorkComplete, WorkValidator } from './data/validator';

import { mapWork2FromJsonResume, mapWorkToJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';
import { useMode } from '../../../hooks/use_mode';

const ExperiencesCardComponent = ({ variant, side }) => {
    const [mode] = useMode();
    const { data, onEdit, isEditing } = useContext(DeveloperProfileContext);

    const mappedData = useMemo(() => mapWork2FromJsonResume(data), [data]);

    const onDialogEdited = useCallback((editedData) => onEdit(mapWorkToJsonResume(editedData)), [onEdit]);

    const isComplete = useMemo(() => validateWorkComplete(mappedData), [mappedData]);

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
            kind=""
            isEditingProfile={isEditing}
            isComplete={isComplete}
            data={mappedData}
            sides={{
                front: (props) => <ExperiencesFront2 {...props} />,
                back: (props) => <ExperiencesBack2 {...props} />
            }}
            editDialog={{
                component: ExperiencesEditDialog,
                validationSchema: WorkValidator,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={currentSide}
        />
    );
};

export const ExperiencesCard2 = ExperiencesCardComponent;
