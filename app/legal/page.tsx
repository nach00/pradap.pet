import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

// Reusable text components
interface TextComponentProps {
	children: React.ReactNode;
	className?: string;
}

// const Container: React.FC<TextComponentProps> = ({ children, className }) => (
// 	<div className={cn("container mx-auto px-4", className)}>{children}</div>
// );

const SectionTitle: React.FC<TextComponentProps> = ({
	children,
	className,
}) => (
	<h4 className={cn("text-lg font-black uppercase mt-6", className)}>
		{children}
	</h4>
);

const MainTitle: React.FC<TextComponentProps> = ({ children, className }) => (
	<h3 className={cn("text-xl font-bold", className)}>{children}</h3>
);

const LargeTitle: React.FC<TextComponentProps> = ({ children, className }) => (
	<div className={cn("text-xl font-black uppercase", className)}>
		{children}
	</div>
);

const BodyText: React.FC<TextComponentProps> = ({ children, className }) => (
	<div className={cn("mt-4 text-sm", className)}>{children}</div>
);

const SmallText: React.FC<TextComponentProps> = ({ children, className }) => (
	<div className={cn("text-sm mt-4", className)}>{children}</div>
);

const CompactText: React.FC<TextComponentProps> = ({ children, className }) => (
	<div className={cn("mt-1", className)}>{children}</div>
);

const Divider: React.FC<{ className?: string }> = ({ className }) => (
	<div className={cn("h-0.5 bg-orange-500 mb-5", className)} />
);

const BulletList: React.FC<TextComponentProps> = ({ children, className }) => (
	<ul className={cn("list-disc list-inside", className)}>{children}</ul>
);

const Legal: React.FC = () => {
	return (
		<Section>
			<Container className="max-w-[60ch]">
				<MainTitle>Legal mumbo jumbo</MainTitle>
				<BodyText>This is just boring stuff. Feel free to ignore.</BodyText>
				<Divider />

				<SectionTitle>Privacy Policy</SectionTitle>
				<BodyText>
					Welcome to www.pradap.pet (the "Site"), a website operated by Natcha
					Pradappet and associates ("Company," "us," "our," and "we"). We are
					committed to maintaining robust privacy protections for our users. We
					provide the Site and services provided through the Site (the Site and
					services will be collectively referred to as the "Services"). Our
					Privacy Policy ("Privacy Policy") is designed to help you understand
					how we collect, use and safeguard the information you provide to us
					and to assist you in making informed decisions when using our Service.
				</BodyText>

				<SmallText>
					By accepting our Privacy Policy, you consent to our collection,
					storage, use and disclosure of your personal information as described
					in this Privacy Policy.
				</SmallText>

				<SectionTitle>Types of Data We Collect</SectionTitle>
				<CompactText>
					We collect "Non-Personal Information" and "Personal Information."
					Non-Personal Information includes information that cannot be used to
					personally identify you, such as anonymous usage data, general
					demographic information we may collect, referring/exit pages and URLs,
					platform types, preferences you submit and preferences that are
					generated based on the data you submit and number of clicks. "Personal
					Information" means data that allows someone to identify or contact
					you, including, for example, your name, address, telephone number,
					email address, as well as any other non-public information about you
					that is associated with or linked to any of the foregoing data.
				</CompactText>

				<SectionTitle>Children's Online Privacy Protection Act</SectionTitle>
				<CompactText>
					We do not intentionally gather Personal Information from visitors who
					are under the age of 13.
				</CompactText>

				<SectionTitle>Information You Provide to Us</SectionTitle>
				<CompactText>
					<BulletList>
						<li>
							We may collect Personal Information from you, such as your first
							and last name, email and mailing address, phone, and password when
							you create an account to log in to our network ("Account").
						</li>
						<li>
							When you subscribe to the Services on our Site, our payment
							processor will collect all information necessary to complete the
							transaction, including your name, credit card information, billing
							information, and direct deposit information.
						</li>
						<li>
							We retain information on your behalf, such as files and messages
							that you store using your Account.
						</li>
						<li>
							If you provide us feedback or contact us via email, we will
							collect your name and email address, as well as any other content
							included in the email, in order to send you a reply.
						</li>
						<li>
							When you participate in one of our surveys, we may collect
							additional information that you knowingly provide.
						</li>
						<li>
							When you post messages on the Services or on a Social Media Site
							("SMS") where we have a page or presence (collectively "SMS
							Pages"), the information contained in your posting may be
							republished on our Site and other users may be able to see them.
						</li>
						<li>
							We are committed to keeping your email address confidential, if
							you provide it to us. We do not sell, rent, or lease our
							subscription lists to third parties. We will not disclose your
							email address to any third parties except as expressly allowed in
							this Privacy Policy.
						</li>
						<li>
							We will maintain the information you send via email in accordance
							with applicable federal law.
						</li>
						<li>
							In compliance with the CAN-SPAM Act, all emails sent from our
							organization will clearly state who the email is from and provide
							clear information on how to contact the sender. In addition, all
							email messages will also contain concise information on how to
							remove yourself from our mailing list so that you receive no
							further e-mail communication from us. Our emails provide users the
							opportunity to opt-out of receiving communications from us and our
							partners by reading the unsubscribe instructions located at the
							bottom of any email they receive from us at anytime. Users who no
							longer wish to receive our newsletter or promotional materials may
							opt-out of receiving these communications by clicking on the
							unsubscribe link in the email.
						</li>
					</BulletList>
				</CompactText>

				<SectionTitle>Information Collected via Technology</SectionTitle>
				<CompactText>
					<BulletList>
						<li>
							In an effort to improve the quality of the Service, we reserve the
							right to track information provided to us by your browser or by
							our software application when you view or use the Service, such as
							the website you came from (known as the "referring URL"), the type
							of browser you use, the device from which you connected to the
							Service, the time and date of access, and other information that
							does not personally identify you. We track this information using
							cookies, or small text files which include an anonymous unique
							identifier. Cookies are sent to a user's browser from our servers
							and are stored on the user's computer hard drive. Sending a cookie
							to a user's browser enables us to collect Non-Personal information
							about that user and keep a record of the user's preferences when
							utilizing our Services, both on an individual and aggregate basis.
						</li>
						<li>
							We may also use third party analytics services such as Google
							Analytics or Google Adsense to collect information about how you
							use and interact with our Services. Such third-party analytics
							services may use cookies to gather information such as the pages
							you visited, your IP address, a date/time stamp for your visit and
							which site referred you to the Site.
						</li>
						<li>
							We reserve the right to use technological equivalents of cookies,
							including social media pixels. These pixels allow social media
							sites to track visitors to outside websites so as to tailor
							advertising messages users see while visiting that social media
							website. We reserve the right to use these pixels in compliance
							with the policies of the various social media sites.
						</li>
						<li>
							Some content or applications, including advertisements, on the
							Site are served by third-parties, including advertisers, ad
							networks and servers, content providers, and application
							providers. These third parties may use cookies alone or in
							conjunction with web beacons or other tracking technologies to
							collect information about you when you use our website. The
							information they collect may be associated with your personal
							information or they may collect information, including personal
							information, about your online activities over time and across
							different websites and other online services. They may use this
							information to provide you with interest-based (behavioral)
							advertising or other targeted content. We do not control these
							third parties' tracking technologies or how they may be used. If
							you have any questions about an advertisement or other targeted
							content, you should contact the responsible provider directly.
						</li>
					</BulletList>
				</CompactText>

				<SectionTitle>Use of Your Personal Information</SectionTitle>
				<CompactText>
					In general, Personal Information you submit to us is used either to
					respond to requests that you make, or to aid us in serving you better.
					We use your Personal Information in the following ways:
				</CompactText>

				<CompactText>
					<BulletList>
						<li>
							to facilitate the creation of and secure your Account on our
							network;
						</li>
						<li>to identify you as a user in our system;</li>
						<li>to provide improved administration of our Services;</li>
						<li>to provide the Services you request;</li>
						<li>
							to improve the quality of experience when you interact with our
							Services;
						</li>
						<li>
							to send you a welcome email to verify ownership of the email
							address provided when your Account was created;
						</li>
						<li>
							to send you administrative email notifications, such as security
							or support and maintenance advisories;
						</li>
						<li>
							to respond to your inquiries related to employment opportunities
							or other requests;
						</li>
						<li>
							to send newsletters, surveys, offers, and other promotional
							materials related to our Services and for other marketing purposes
							including those of third parties;
						</li>
						<li>to perform marketing or data analysis.</li>
					</BulletList>
				</CompactText>

				<CompactText>
					If you opt to receive any free resources, participate in any free
					training programs, register for a webinar, register for a live event,
					register for a seminar, or purchase any products sold by us on this
					Website, we will only enroll you to receive our free email newsletter
					if you affirmatively consent to it. If you do not wish to receive this
					newsletter, you can unsubscribe anytime. We include an "unsubscribe"
					link at the bottom of every email we send. If you ever have trouble
					unsubscribing, you can send an email to the email address provided
					below in order to request to unsubscribe from future emails.
				</CompactText>

				<SectionTitle>Use of Non-Personal Information</SectionTitle>
				<CompactText>
					In general, we use Non-Personal Information to help us improve the
					Service and customize the user experience. We also aggregate
					Non-Personal Information in order to track trends and analyze use
					patterns on the Site. This Privacy Policy does not limit in any way
					our use or disclosure of Non-Personal Information and we reserve the
					right to use and disclose such Non-Personal Information to our
					partners, advertisers and other third parties at our discretion.
				</CompactText>

				<CompactText>
					If our information practices change at any time in the future, we will
					post the policy changes to the Site so that you may opt out of the new
					information practices. We suggest that you check the Site periodically
					if you are concerned about how your information is used.
				</CompactText>

				<SectionTitle>Location-Based Data</SectionTitle>
				<CompactText>
					We make use of location-based data for our website to connect you with
					other users near you that can either offer or are in need of the
					Services. If you choose not to allow us to access your location, some
					or all functionality may not be available to you.
				</CompactText>

				<SectionTitle>Disclosure of Your Personal Information</SectionTitle>
				<CompactText>
					As a general rule, we do not sell, rent, lease or otherwise transfer
					any information collected either automatically or through your
					voluntary action. We may disclose your Personal Information as
					described below and as described elsewhere in this Privacy Policy.
				</CompactText>

				<CompactText>
					<span className="underline">Third Party Service Providers</span>. We
					may share your Personal Information with third party service providers
					to: provide you with the Services that we offer you through our Site;
					to conduct quality assurance testing; to perform marketing; to run
					data analysis; to facilitate creation of accounts; to provide
					technical support; and/or to provide other services to you.
				</CompactText>

				<CompactText>
					<span className="underline">Other Disclosures</span>. Regardless of
					any choices you make regarding your Personal Information (as described
					below), we may disclose Personal Information if it believes in good
					faith that such disclosure is necessary (a) in connection with any
					legal investigation; (b) to comply with relevant laws or to respond to
					subpoenas or warrants served on us; (c) to protect or defend our
					rights or property, or the rights or property of users of the
					Services; and/or (d) to investigate or assist in preventing any
					violation or potential violation of the law, this Privacy Policy, or
					Terms of Use.
				</CompactText>

				<SectionTitle>Links to Third Party Websites</SectionTitle>
				<CompactText>
					As part of the Service, we may provide links to or compatibility with
					other websites or applications. However, we are not responsible for
					the privacy practices employed by those websites or the information or
					content they contain. This Privacy Policy applies solely to
					information collected by us through the Site and the Service.
					Therefore, this Privacy Policy does not apply to your use of a third
					party website accessed by selecting a link on our Site or via our
					Service. To the extent that you access or use the Service through or
					on another website or application, then the privacy policy of that
					other website or application will apply to your access or use of that
					site or application. We encourage our users to read the privacy
					statements of other websites before proceeding to use them.
				</CompactText>

				<SectionTitle>
					Your Rights Regarding the Use of Your Personal Information
				</SectionTitle>
				<CompactText>
					You have the right at any time to prevent us from contacting you for
					marketing purposes. When we send a promotional communication to a
					user, the user can opt out of further promotional communications by
					following the unsubscribe instructions provided in each promotional
					email. If applicable, you can also indicate that you do not wish to
					receive marketing communications from us in the "Settings" section of
					your Account. Please note that notwithstanding the promotional
					preferences you indicate by either unsubscribing or opting out in the
					Settings section of your Account, we may continue to send you
					administrative emails including, for example, periodic updates to our
					Privacy Policy.
				</CompactText>

				<SectionTitle>Security of Your Personal Information</SectionTitle>
				<CompactText>
					We implement security measures designed to protect your information
					from unauthorized access. Any account you have with our Site is
					protected by your account password and we urge you to take steps to
					keep your personal information safe by not disclosing your password
					and by logging out of your account after each use. We further protect
					your information from potential security breaches by implementing
					certain technological security measures However, these measures do not
					guarantee that your information will not be accessed, disclosed,
					altered or destroyed by breach of such firewalls and secure server
					software. While we use reasonable efforts to protect your Personal
					Information, we cannot guarantee its absolute security. By using our
					Service, you acknowledge that you understand and agree to assume these
					risks.
				</CompactText>

				<SectionTitle>Visitors' GDPR Rights</SectionTitle>
				<CompactText>
					If you are within the European Union, you are entitled to certain
					information and have certain rights under the General Data Protection
					Regulation (the "GDPR"). Those rights include the following:
				</CompactText>

				<CompactText>
					<BulletList>
						<li>
							We will retain any information you choose to provide to us until
							one of the following happens: (a) you ask us to delete the
							information, (b) we decide to cease using our existing data
							providers, or (c) we decide that the value in retaining the data
							is outweighed by the costs of retaining it.
						</li>
						<li>
							You have the right to request access to your data that we store
							and the rights to either rectify or erase your personal data.
						</li>
						<li>
							You have the right to seek restrictions on the processing of your
							data. You have the right to object to the processing of your data
							and the right to the portability of your data.
						</li>
						<li>
							To the extent that you provided consent to our processing of your
							personal data, you have the right to withdraw that consent at any
							time, without affecting the lawfulness of processing based upon
							consent that occurred prior to your withdrawal of consent.
						</li>
						<li>
							You have the right to lodge a complaint with a supervisory
							authority that has jurisdiction over issues related to the GDPR.
						</li>
						<li>
							We require only the information that is reasonably required to
							enter into a contract with you. We will not require you to provide
							consent for any unnecessary processing as a condition of entering
							into a contract with us.
						</li>
					</BulletList>
				</CompactText>

				<SectionTitle>Changes to This Privacy Policy</SectionTitle>
				<CompactText>
					We reserve the right to change this policy and our Terms of Service at
					any time. We may notify you of significant changes to our Privacy
					Policy by sending a notice to the primary email address specified in
					your account or by placing a prominent notice on our site. Significant
					changes will go into effect 30 days following such notification.
					Non-material changes or clarifications will take effect immediately.
					You should periodically check the Site and this privacy page for
					updates.
				</CompactText>

				<SectionTitle>Contact Information</SectionTitle>
				<CompactText>
					If you have any questions regarding this Privacy Policy or the
					practices of the Site, please contact us by sending an email to{" "}
					<a
						href="mailto:natcha@pradap.pet"
						className="text-blue-400 hover:text-blue-300"
					>
						natcha@pradap.pet
					</a>
					.
				</CompactText>

				<SectionTitle>Last Updated</SectionTitle>
				<CompactText>
					This Privacy Policy was last updated on August 29, 2025.
				</CompactText>

				<Divider />

				<LargeTitle>TERMS OF USE</LargeTitle>

				<BodyText>
					Welcome to www.pradap.pet (the "Site"), a website operated by Natcha
					Pradappet and associates ("Company," "us," "our," and "we"). We
					provide the Site and the services provided through the Site (the Site
					and services will be collectively referred to as the "Services").
				</BodyText>

				<BodyText>
					These Terms of Use ("Agreement") set forth the legally binding terms
					for your use of the Services. By accessing or using the Services, you
					are accepting this Agreement and you represent and warrant that you
					have the right, authority, and capacity to enter into this Agreement.
					If you do not agree with all of the provisions of this Agreement, do
					not access and/or use the Services. You may not access or use the
					Services or accept the Agreement if you are not at least 18 years old.
				</BodyText>

				<SectionTitle>Privacy Policy</SectionTitle>
				<BodyText>
					The Company respects the privacy of its Service users. Please refer to
					our Privacy Policy, linked in the footer of our website, which
					explains how we collect, use, and disclose information that pertains
					to your privacy. When you access or use the Service, you signify your
					agreement to this Privacy Policy.
				</BodyText>

				<SectionTitle>Accounts</SectionTitle>
				<BodyText>
					Account Creation. In order to use certain features of the Services,
					you may need to register for an account with us ("your Account") and
					provide certain information about yourself as prompted by the
					registration form. You represent and warrant that: (a) all required
					registration information you submit is truthful and accurate; (b) you
					will maintain the accuracy of such information. You may delete your
					Account at any time, for any reason, by following the instructions on
					the Site. We may suspend or terminate your Account in accordance with
					the Terms and Termination.
				</BodyText>

				<BodyText>
					Account Responsibilities. You are responsible for maintaining the
					confidentiality of your Account login information and are fully
					responsible for all activities that occur under your Account. You
					agree to immediately notify us of any unauthorized use, or suspected
					unauthorized use, of your Account or any other breach of security. We
					cannot and will not be liable for any loss or damage arising from your
					failure to comply with the above requirements.
				</BodyText>

				<SectionTitle>Rights and Licenses</SectionTitle>
				<BodyText>
					License to Use Site. We grant you a non-transferable, non-exclusive,
					right to access and use the Services for your personal use.
				</BodyText>

				<BodyText>
					Certain Restrictions. The rights granted to you in this Agreement are
					subject to the following restrictions: (a) you will not license, sell,
					rent, lease, transfer, assign, distribute, host, or otherwise
					commercially exploit the Services; (b) you will not modify, make
					derivative works of, disassemble, reverse compile or reverse engineer
					any part of the Services; (c) you will not access the Services in
					order to build a similar or competitive service; and (d) except as
					expressly stated in these terms, no part of the Services may be
					copied, reproduced, distributed, republished, downloaded, displayed,
					posted or transmitted in any form or by any means. Any future release,
					update, or other addition to functionality of the Services will be
					subject to the terms of this Agreement. All copyright and other
					proprietary notices on any Services content must be retained on all
					copies.
				</BodyText>

				<BodyText>
					Modification. We reserve the right, at any time, to modify, suspend,
					or discontinue the Services with or without notice. You agree that we
					will not be liable to you or to any third party for any modification,
					suspension, or discontinuance of the Services, except and if otherwise
					expressly set forth in these Terms.
				</BodyText>

				<BodyText>
					No Support or Maintenance. You acknowledge and agree that we will have
					no obligation to provide you with any support or maintenance in
					connection with the Services.
				</BodyText>

				<BodyText>
					Ownership of the Services. Excluding your User Content (defined
					below), you acknowledge that all the intellectual property rights,
					including copyrights, patents, trademarks, and trade secrets, in the
					Services, including the Site, are owned by us or our licensors. The
					provision of the Services does not transfer to you or any third party
					any rights, title or interest in or to the intellectual property
					rights. We reserve all rights not granted in this Agreement.
				</BodyText>

				<SectionTitle>User Content</SectionTitle>
				<BodyText>
					User Content. "User Content" means any and all information and content
					that a user submits to or posts on: (a) the Services and (b) on social
					networking sites where we have a page or presence. You will own your
					User Content, with the understanding that you agree that we may use
					and reproduce the User Content you make available on our social
					networking sites and on the Services. You are solely responsible for
					the User Content that you post, upload, link to or otherwise make
					available via the Service. We reserve the right to remove any User
					Content from the Service at our discretion.
				</BodyText>

				<BodyText>
					The following rules pertain to User Content. By transmitting and
					submitting any User Content while using the Service, you agree as
					follows:
				</BodyText>

				<CompactText>
					<BulletList>
						<li>
							You are solely responsible for your account and the activity that
							occurs while signed in to or while using your account;
						</li>
						<li>
							You will not submit content that is copyrighted or subject to
							third party proprietary rights, including privacy, publicity,
							trade secret, etc., unless you are the owner of such rights or
							have the appropriate permission from their rightful owner to
							specifically submit such content;
						</li>
						<li>You will abide by our Acceptable Use Policy below; and</li>
						<li>
							You affirm we have the right to determine whether any of your User
							Content submissions are appropriate and comply with these Terms of
							Use, remove any and/or all of your submissions, and terminate your
							account with or without prior notice.
						</li>
					</BulletList>
				</CompactText>

				<BodyText>
					You understand and agree that any liability, loss or damage that
					occurs as a result of the use of any User Content that you make
					available or access through your use of the Service is solely your
					responsibility. We are not responsible for any public display or
					misuse of your User Content. We do not, and cannot, pre-screen or
					monitor all User Content. However, at our discretion, we, or
					technology we employ, may monitor and/or record your interactions with
					the Service.
				</BodyText>

				<BodyText>
					License. You grant, and you represent and warrant that you have the
					right to grant, to us an irrevocable, non-exclusive, royalty-free and
					fully paid, worldwide license to reproduce, distribute, publicly
					display and perform, prepare derivative works of, incorporate into
					other works, and otherwise use your User Content, and to grant
					sublicenses of the foregoing, solely for the purposes of including
					your User Content in the Site and Services. You agree to irrevocably
					waive (and cause to be waived) any claims and assertions of moral
					rights or attribution with respect to your User Content.
				</BodyText>

				<BodyText>
					Acceptable Use Policy. Your permission to use the Services is
					conditioned upon the following Use Restrictions and Conduct
					Restrictions: You agree that you will not under any circumstances:
				</BodyText>

				<CompactText>
					<BulletList>
						<li>
							post any information that is abusive, threatening, obscene,
							defamatory, libelous, or racially, sexually, religiously, or
							otherwise objectionable and offensive;
						</li>
						<li>
							use the service for any unlawful purpose or for the promotion of
							illegal activities;
						</li>
						<li>
							attempt to, or harass, abuse or harm another person or group;
						</li>
						<li>use another user's account without permission;</li>
						<li>
							interfere or attempt to interfere with the proper functioning of
							the Service;
						</li>
						<li>
							make any automated use of the system, or take any action that we
							deem to impose or to potentially impose an unreasonable or
							disproportionately large load on our servers or network
							infrastructure;
						</li>
						<li>
							use the Site or any of its contents to advertise or solicit, for
							any commercial purpose or to compete, directly or indirectly, with
							our Service;
						</li>
						<li>
							bypass any robot exclusion headers or other measures we take to
							restrict access to the Service or use any software, technology, or
							device to scrape, spider, or crawl the Service or harvest or
							manipulate data; or
						</li>
						<li>
							publish or link to malicious content intended to damage or disrupt
							another user's browser or computer.
						</li>
					</BulletList>
				</CompactText>

				<BodyText>
					Feedback. If you provide us any feedback, comments, or suggestions
					regarding the Services or purchased items ("Feedback"), you assign to
					us all rights in the Feedback and agree that we will have the right to
					use the Feedback and related information in any manner we deem
					appropriate. We will treat any Feedback you provide to us as
					non-confidential and nonproprietary. We will be entitled to use,
					reproduce, disclose, publish and distribute any material you submit
					for any purpose whatsoever, without restriction and without
					compensating you in any way. You agree that you will not submit to us
					any information or ideas that you consider to be confidential or
					proprietary.
				</BodyText>

				<BodyText>
					Indemnity. You agree to indemnify and hold us (and our officers,
					employees, and agents) harmless, including costs and attorney's fees,
					from any claim or demand made by any third party due to or arising out
					of (a) your use of the Services, (b) your User Content, (c) your
					violation of this Agreement; or (d) your violation of applicable laws
					or regulations. We reserve the right, at your expense, to assume the
					exclusive defense and control of any matter for which you are required
					to indemnify us and you agree to cooperate with our defense of these
					claims. You agree not to settle any matter without our prior written
					consent. We will use reasonable efforts to notify you of any such
					claim, action or proceeding upon becoming aware of it.
				</BodyText>

				<SectionTitle>Links to Other Sites and/or Materials</SectionTitle>
				<BodyText>
					Third Party Sites, Ads and Ad Networks. As part of the Service, we may
					provide you with convenient links to third party website(s)
					("Third-Party Sites") as well as content or items belonging to or
					originating from third parties (the "Third Party Applications,
					Software or Content"). Users may also include links to their website
					or other Third-Party Sites on their listings. These links are provided
					as a courtesy to Service subscribers. We have no control over Third
					Party Sites and Third-Party Applications, Software or Content or the
					promotions, materials, information, goods or services available on
					these Third-Party Sites or Third-Party Applications, Software or
					Content. If you decide to leave the Site and access the Third-Party
					Sites or to use or install any Third-Party Applications, Software or
					Content, you do so at your own risk and you should be aware that our
					terms and policies no longer govern. You should review the applicable
					terms and policies, including privacy and data gathering practices, of
					any site to which you navigate from the Site or relating to any
					applications you use or install from the site.
				</BodyText>

				<BodyText>
					Links to Our Site. You are permitted to link to our Site for
					noncommercial purposes, provided that you do so in a way that is fair
					and legal and does not damage our reputation. You may not link to our
					Site in such a way as to suggest any form of association, approval, or
					endorsement on our part without our express written consent. You may
					not deep-link to any page of this site for any purpose whatsoever
					unless the link is expressly authorized in writing by us. We reserve
					the right to withdraw permission for any link.
				</BodyText>

				<BodyText>
					Release. You release and forever discharge us (and our officers,
					employees, agents, successors, and assigns) from, and waive and
					relinquish, each and every past, present and future dispute, claim,
					controversy, demand, right, obligation, liability, action and cause of
					action of every kind and nature (including personal injury, death, and
					property damage), that has arisen or arises directly or indirectly out
					of, or relates directly or indirectly to, any interactions with, or
					act or omission of, other Service users or Third Party Sites & Ads. IF
					YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE CALIFORNIA CIVIL CODE SECTION
					1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: "A GENERAL
					RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR
					SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE
					RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED
					HIS OR HER SETTLEMENT WITH THE DEBTOR."
				</BodyText>

				<SectionTitle>Disclaimers</SectionTitle>
				<BodyText>
					THE SERVICES, INCLUDING THE SITE, ARE PROVIDED "AS-IS" AND "AS
					AVAILABLE" AND WE EXPRESSLY DISCLAIM ANY WARRANTIES AND CONDITIONS OF
					ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING THE WARRANTIES OR
					CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
					TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT. WE MAKE NO
					WARRANTY THAT THE SERVICES: (a) WILL MEET YOUR REQUIREMENTS; (b) WILL
					BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS;
					(c) WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE,
					COMPLETE, LEGAL, OR SAFE OR (d) THAT THE SERVICES WILL BE TO YOUR
					SATISFACTION.
				</BodyText>

				<BodyText>
					SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES,
					SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.
				</BodyText>

				<SectionTitle>Limitation on Liability</SectionTitle>
				<BodyText>
					IN NO EVENT WILL WE BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST
					PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL
					OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO THIS AGREEMENT OR YOUR
					USE OF, OR INABILITY TO USE, THE SERVICES, EVEN IF WE HAVE BEEN
					ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF, THE
					SERVICES ARE AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY
					RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA
					RESULTING THEREFROM.
				</BodyText>

				<BodyText>
					IN NO EVENT WILL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES,
					AND CAUSES OF ACTION (WHETHER IN CONTRACT, TORT (INCLUDING, BUT NOT
					LIMITED TO, NEGLIGENCE), OR OTHERWISE EXCEED THE AMOUNTS YOU'VE PAID
					US IN THE PRIOR 12 MONTHS (IF ANY). THE EXISTENCE OF MORE THAN ONE
					CLAIM WILL NOT ENLARGE THIS LIMIT.
				</BodyText>

				<BodyText>
					SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF
					LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE
					LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
				</BodyText>

				<SectionTitle>Term and Termination</SectionTitle>
				<BodyText>
					This Agreement will remain in full force and effect while you use the
					Services. We may (a) suspend your rights to use the Site and/or
					Services (including your Account) or (b) terminate this Agreement, at
					any time for any reason at our sole discretion, including for any use
					of the Services in violation of this Agreement. Upon termination of
					this Agreement, your Account and right to access and use the Services
					will terminate immediately. You understand that any termination of
					your Account involves deletion of your User Content from our live
					databases. We will not have any liability whatsoever to you for any
					termination of this Agreement, including for termination of your
					Account or deletion of your User Content. Upon termination of this
					Agreement, all of the provisions will terminate except those that by
					their nature should survive.
				</BodyText>

				<SectionTitle>Copyright Policy</SectionTitle>
				<BodyText>
					We respect the intellectual property of others and ask that users of
					our Site and Services do the same. In connection with our Site and
					Services and in accordance with the Digital Millennium Copyright Act
					("DMCA"), we have adopted and implemented a policy respecting
					copyright laws that provide for the removal of any infringing
					materials and for the termination, in appropriate circumstances, of
					users of our online Services who are repeat infringers of intellectual
					property rights, including copyrights. If you believe that one of our
					users is, through the use of our Services, unlawfully infringing the
					copyright(s) in a work, and wish to have the allegedly infringing
					material removed, the following information in the form of a written
					notification (pursuant to 17 U.S.C. § 512(c)) must be provided to our
					designated Copyright Agent:
				</BodyText>

				<CompactText>
					<BulletList>
						<li>your physical or electronic signature;</li>
						<li>
							identification of the copyrighted work(s) that you claim to have
							been infringed;
						</li>
						<li>
							identification of the material on our Services that you claim is
							infringing and that you request us to remove;
						</li>
						<li>
							sufficient information to permit us to locate such material;
						</li>
						<li>your address, telephone number, and email address;</li>
						<li>
							a statement that you have a good faith belief that use of the
							objectionable material is not authorized by the copyright owner,
							its agent, or under the law; and
						</li>
						<li>
							a statement that the information in the notification is accurate,
							and under penalty of perjury, that you are either the owner of the
							copyright that has allegedly been infringed or that you are
							authorized to act on behalf of the copyright owner.
						</li>
					</BulletList>
				</CompactText>

				<BodyText>
					Please note that, pursuant to 17 U.S.C. § 512(f), any
					misrepresentation of material fact (falsities) in a written
					notification automatically subjects the complaining party to liability
					for any damages, costs and attorney's fees incurred by us in
					connection with the written notification and allegation of copyright
					infringement.
				</BodyText>

				<BodyText>Our designated Copyright Agent is:</BodyText>
				<CompactText>Planet Nacho</CompactText>
				<CompactText>Attn: Privacy Officer</CompactText>
				<CompactText>
					Email:{" "}
					<a
						href="mailto:natcha@pradap.pet"
						className="text-blue-400 hover:text-blue-300"
					>
						natcha@pradap.pet
					</a>
					.
				</CompactText>

				<SectionTitle>Legal Disputes</SectionTitle>
				<BodyText>
					PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR RIGHTS AND WILL
					HAVE A SUBSTANTIAL IMPACT ON HOW ANY CLAIMS YOU HAVE AGAINST US WILL
					BE RESOLVED.
				</BodyText>

				<BodyText>
					You agree that any claim or dispute at law or equity that has arisen
					or may arise between you and us relating in any way to or arising out
					of this or previous versions of our Terms of Service Agreement, your
					use of or access to the Services, or any products or services sold or
					purchased through the Services, will be resolved in accordance with
					the provisions set forth in this Legal Disputes Section.
				</BodyText>

				<BodyText>
					Choice of Law. This Agreement is made under and will be governed by
					and construed in accordance with the laws of the State of State Name,
					without giving effect to any principles that provide for the
					application of the law of another jurisdiction.
				</BodyText>

				<BodyText>
					Claim Limitations. You agree that any cause of action arising out of
					or related to the Services must commence within one (1) year after the
					cause of action accrues. Otherwise, such cause of action is
					permanently barred.
				</BodyText>

				<SectionTitle>Agreement to Arbitrate</SectionTitle>
				<BodyText>
					You agree that any and all disputes or claims that have arisen or may
					arise between you and us relating in any way to or arising out of this
					or previous versions of the Terms of Service Agreement, your use of or
					access to our Services, or any products or services sold, offered, or
					purchased through our Services will be resolved exclusively through
					final and binding arbitration, rather than in court. Alternatively,
					you may assert your claims in small claims court in County Name, State
					Name, if your claims qualify and so long as the matter remains in such
					court and advances only on an individual (non-class name,
					non-representative) basis. The Federal Arbitration Act governs the
					interpretation and enforcement of this Agreement to Arbitrate.
				</BodyText>

				<BodyText>
					The arbitration will be conducted by JAMS Arbitration ("JAMS") under
					its applicable rules and procedures, as modified by this Agreement to
					Arbitrate. The arbitration will be conducted before one commercial
					arbitrator with substantial experience in resolving commercial
					contract disputes.
				</BodyText>

				<BodyText>
					Your rights will be determined by a neutral arbitrator and not a judge
					or jury. You understand that arbitration procedures can be more
					limited than rules applicable in court. Arbitrator decisions are as
					enforceable as any court order and are subject to very limited review
					in court.
				</BodyText>

				<BodyText>
					You and we must abide by the following rules: (a) ANY CLAIMS BROUGHT
					BY YOU OR US MUST BE BROUGHT IN THE PARTIES' INDIVIDUAL CAPACITY, AND
					NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
					REPRESENTATIVE PROCEEDING; (b) THE ARBITRATOR MAY NOT CONSOLIDATE MORE
					THAN ONE PERSON'S CLAIMS, MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A
					REPRESENTATIVE OR CLASS PROCEEDING, AND MAY NOT AWARD CLASS-WIDE
					RELIEF, (c) the arbitrator will honor claims of privilege and privacy
					recognized at law; (d) the arbitration will be confidential, and
					neither you nor we may disclose the existence, content or results of
					any arbitration, except as may be required by law or for purposes of
					enforcement of the arbitration award; (e) the arbitrator may award any
					individual relief or individual remedies that are permitted by
					applicable law; and (f) each side pays its own attorneys' fees and
					expenses unless there is a statutory provision that requires the
					prevailing party to be paid its fees and litigation expenses, and then
					in such instance, the fees and costs awarded will be determined by the
					applicable law.
				</BodyText>

				<BodyText>
					With the exception of subparts (a) and (b) in the paragraph above
					(prohibiting arbitration on a class name or collective basis), if any
					part of this arbitration provision is deemed to be invalid,
					unenforceable or illegal, or otherwise conflicts with the Rules and
					Procedures, then the balance of this arbitration provision will remain
					in effect and will be construed in accordance with its terms as if the
					invalid, unenforceable, illegal or conflicting provision were not
					contained herein. If, however, either subpart (a) or (b) is found to
					be invalid, unenforceable or illegal, then the entirety of this
					arbitration provision will be null and void, and neither you nor we
					will be entitled to arbitration. If for any reason a claim proceeds in
					court rather than in arbitration, the dispute will be exclusively
					brought in state or federal court in the county and state referenced
					above.
				</BodyText>

				<SectionTitle>General</SectionTitle>
				<BodyText>
					Changes to Agreement. This Agreement is subject to occasional
					revision, and if we make any substantial changes, we may notify you by
					sending you an email to the last email address you provided to us (if
					any) and/or by prominently posting notice of the changes on our Site.
					Any significant changes to this Agreement will be effective 30 days
					after posting such notice. You are responsible for providing us with
					your most current email address. In the event that the last email
					address that you have provided us is not valid, or for any reason is
					not capable of delivering to you the notice described above, our
					dispatch of the email containing such notice will nonetheless
					constitute effective notice of the changes described in the notice.
					Continued use of our Site or Services following notice of such changes
					will indicate your acknowledgement of such changes and agreement to be
					bound by the terms and conditions of such changes.
				</BodyText>

				<BodyText>
					Copyright/Trademark Information. Copyright © Pradappet. All rights
					reserved. All trademarks, logos and service marks ("Marks") displayed
					on the Site are our property or the property of other third parties.
					You are not permitted to use these Marks without our prior written
					consent or the consent of such third party which may own the Marks.
				</BodyText>

				<BodyText>Contact Information:</BodyText>
				<CompactText>Planet Nacho</CompactText>
				<CompactText>
					Email:{" "}
					<a
						href="mailto:natcha@pradap.pet"
						className="text-blue-400 hover:text-blue-300"
					>
						natcha@pradap.pet
					</a>
					.
				</CompactText>

				<BodyText>Last Updated</BodyText>
				<BodyText>This Agreement was last updated on August 29, 2025.</BodyText>
			</Container>
		</Section>
	);
};

export default Legal;
