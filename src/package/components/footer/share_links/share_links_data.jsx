import React from 'react';
import { FormattedMessage } from 'react-intl';

import { CopyWrapper } from '../../commons/copy_wrapper/copy_wrapper';

/* import { ReactComponent as TwitterIcon } from '../../../assets/icons/brands/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/icons/brands/facebook.svg'; */
import { ReactComponent as LinkedInIcon } from '../../../assets/icons/brands/linkedin.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/share.svg';
import { ReactComponent as MailIcon } from '../../../assets/icons/email.svg';

export const SHARE_LINKS_DATA = Object.freeze({
    /* twitter: {
        icon: TwitterIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="Share on {platform}"
                values={{ platform: 'Twitter' }}
            />
        ),
        getLink: ({ translatedMessage }) => `https://twitter.com/intent/tweet?text=${translatedMessage}`
    },
    facebook: {
        icon: FacebookIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="Share on {platform}"
                values={{ platform: 'Facebook' }}
            />
        ),
        getLink: ({ link }) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(link)}`
    }, */
    linkedIn: {
        icon: LinkedInIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="Share on {platform}"
                values={{ platform: 'LinkedIn' }}
            />
        ),
        getLink: ({ lien = 'julietac' }) => `https://www.linkedin.com/in/${lien}`
    },
    copyShareUrl: {
        icon: (props) => (
            <CopyWrapper value={(typeof window === 'undefined' ? {} : window).location?.href}>
                <ShareIcon {...props} />
            </CopyWrapper>
        ),
        tooltipTranslation: <FormattedMessage id="Footer.shareLinks.copyUrl" defaultMessage="Copy profile's URL" />
    },
    emailMe: {
        icon: (props) => (
            <CopyWrapper value={'bonjour@julietacontreras.pro'}>
                <MailIcon {...props} />
            </CopyWrapper>
        ),
        tooltipTranslation: <FormattedMessage id="Footer.shareLinks.emailMe" defaultMessage="Copy profile's URL" />
    }
});
