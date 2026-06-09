import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { storyDescription } from './resources/story';
import { cacheDescription } from './resources/cache';
import { restrictedDescription } from './resources/restricted';
import { schemasDescription } from './resources/schemas';
import { permissionsDescription } from './resources/permissions';
import { sessionsDescription } from './resources/sessions';
import { viewsDescription } from './resources/views';
import { storyCollaboratorsDescription } from './resources/story-collaborators';
import { eventsDescription } from './resources/events';
import { conversationDescription } from './resources/conversation';
import { defaultDescription } from './resources/default';

export class PresalyticsStory implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Presalytics Story',
		name: 'N8nDevPresalyticsStory',
		icon: { light: 'file:./presalytics-story.svg', dark: 'file:./presalytics-story.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'This API is the main entry point for creating, editing and publishing analytics throught the Presalytics API',
		defaults: { name: 'Presalytics Story' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevPresalyticsStoryApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Story",
					"value": "Story",
					"description": "Story"
				},
				{
					"name": "Cache",
					"value": "Cache",
					"description": ""
				},
				{
					"name": "Restricted",
					"value": "Restricted",
					"description": ""
				},
				{
					"name": "Schemas",
					"value": "Schemas",
					"description": ""
				},
				{
					"name": "Permissions",
					"value": "Permissions",
					"description": "Permissions and Authorization"
				},
				{
					"name": "Sessions",
					"value": "Sessions",
					"description": ""
				},
				{
					"name": "Views",
					"value": "Views",
					"description": ""
				},
				{
					"name": "Story Collaborators",
					"value": "Story Collaborators",
					"description": "Story Collaborators"
				},
				{
					"name": "Events",
					"value": "Events",
					"description": ""
				},
				{
					"name": "Conversation",
					"value": "Conversation",
					"description": ""
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...storyDescription,
		...cacheDescription,
		...restrictedDescription,
		...schemasDescription,
		...permissionsDescription,
		...sessionsDescription,
		...viewsDescription,
		...storyCollaboratorsDescription,
		...eventsDescription,
		...conversationDescription,
		...defaultDescription
		],
	};
}
