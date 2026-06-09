import type { INodeProperties } from 'n8n-workflow';

export const permissionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					]
				}
			},
			"options": [
				{
					"name": "Story Permission Types Get",
					"value": "Story Permission Types Get",
					"action": "Permissions: List Permission Types",
					"description": "Returns a list of possible user permission types",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/permission_types"
						}
					}
				},
				{
					"name": "Story Id Collaborators Userid Permissiontype Get",
					"value": "Story Id Collaborators Userid Permissiontype Get",
					"action": "Permissions: Story Authorization for a User",
					"description": "Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/collaborators/authorize/{{$parameter[\"story_collaborator_userid\"]}}/{{$parameter[\"permissiontype\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /permission_types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					],
					"operation": [
						"Story Permission Types Get"
					]
				}
			}
		},
		{
			"displayName": "GET /{id}/collaborators/authorize/{story_collaborator_userid}/{permissiontype}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					],
					"operation": [
						"Story Id Collaborators Userid Permissiontype Get"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					],
					"operation": [
						"Story Id Collaborators Userid Permissiontype Get"
					]
				}
			}
		},
		{
			"displayName": "Story Collaborator Userid",
			"name": "story_collaborator_userid",
			"required": true,
			"description": "The presalytics userid (NOT the Id of the story_collaborator object)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					],
					"operation": [
						"Story Id Collaborators Userid Permissiontype Get"
					]
				}
			}
		},
		{
			"displayName": "Permissiontype",
			"name": "permissiontype",
			"required": true,
			"description": "the type of permission requested.  can be a permission_type object name (e.g., owner, editor, create, viewer, admin) or a permission type field (e.g., can_edit, can_view, can_add_collaborators, can_delete)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					],
					"operation": [
						"Story Id Collaborators Userid Permissiontype Get"
					]
				}
			}
		},
];
