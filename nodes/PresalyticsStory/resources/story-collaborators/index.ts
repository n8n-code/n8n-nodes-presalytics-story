import type { INodeProperties } from 'n8n-workflow';

export const storyCollaboratorsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					]
				}
			},
			"options": [
				{
					"name": "Story Id Collaborators Get",
					"value": "Story Id Collaborators Get",
					"action": "Story Collaborators: List",
					"description": "Gets a list users that can read or edit this story",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/collaborators"
						}
					}
				},
				{
					"name": "Story Id Collaborators Post",
					"value": "Story Id Collaborators Post",
					"action": "Story Collaborators: Add New User",
					"description": "Add a colloborator to this story",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"id\"]}}/collaborators"
						}
					}
				},
				{
					"name": "Story Id Collaborators Inactive Post",
					"value": "Story Id Collaborators Inactive Post",
					"action": "Story Collaborators: Edit Inactive User Permission",
					"description": "Edit story permissions for inactive users.  Requires admin rights.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"id\"]}}/collaborators/inactive"
						}
					}
				},
				{
					"name": "Story Id Collaborators Userid Delete",
					"value": "Story Id Collaborators Userid Delete",
					"action": "Story Collaborators: Remove User",
					"description": "Remove a collaborator from this story",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/{{$parameter[\"id\"]}}/collaborators/{{$parameter[\"story_collaborator_userid\"]}}"
						}
					}
				},
				{
					"name": "Story Id Collaborators Userid Get",
					"value": "Story Id Collaborators Userid Get",
					"action": "Story Collaborators: Access Permissions",
					"description": "Data to help you understand the access rights of a particular collaborator on this story",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/collaborators/{{$parameter[\"story_collaborator_userid\"]}}"
						}
					}
				},
				{
					"name": "Story Id Collaborators Userid Put",
					"value": "Story Id Collaborators Userid Put",
					"action": "Story Collaborators: Edit Access Rights",
					"description": "Modify a user's access right to this story (e.g., grant edit permissions)",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/{{$parameter[\"id\"]}}/collaborators/{{$parameter[\"story_collaborator_userid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{id}/collaborators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Get"
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
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Get"
					]
				}
			}
		},
		{
			"displayName": "POST /{id}/collaborators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Post"
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
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Post"
					]
				}
			}
		},
		{
			"displayName": "Collaborator Type",
			"name": "collaborator_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "collaborator_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Post"
					]
				}
			}
		},
		{
			"displayName": "User Email",
			"name": "user_email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "user_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Post"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Post"
					]
				}
			}
		},
		{
			"displayName": "POST /{id}/collaborators/inactive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Inactive Post"
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
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Inactive Post"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "action",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Inactive Post"
					]
				}
			}
		},
		{
			"displayName": "Lead Id",
			"name": "lead_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "lead_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Inactive Post"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Inactive Post"
					]
				}
			}
		},
		{
			"displayName": "DELETE /{id}/collaborators/{story_collaborator_userid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Userid Delete"
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
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Userid Delete"
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
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Userid Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /{id}/collaborators/{story_collaborator_userid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Userid Get"
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
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Userid Get"
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
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Userid Get"
					]
				}
			}
		},
		{
			"displayName": "PUT /{id}/collaborators/{story_collaborator_userid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Userid Put"
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
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Userid Put"
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
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Userid Put"
					]
				}
			}
		},
		{
			"displayName": "PUT /{id}/collaborators/{story_collaborator_userid}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story Collaborators"
					],
					"operation": [
						"Story Id Collaborators Userid Put"
					]
				}
			}
		},
];
