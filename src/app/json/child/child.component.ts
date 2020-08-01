import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DetailsComponent } from '../details/details.component';

interface Nodes{}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ChildComponent {
  
  isShow=false;
  nodes:Nodes[]=[
    {
      id: 'tgw-test1',
      shape: 'image',
      image: '/assets/images/aws/transitgateway.png',
      details: {
        'TransitGatewayId': 'tgw-test1',
        'TransitGatewayArn': 'arn:aws:ec2:us-west-1:arntgw123:transit-gateway/tgw-test1',
        'State': 'available',
        'OwnerId': 'arntgw123',
        'Description': 'US_WEST-TGW',
        'CreationTime': '2020-01-19 23:37:22+00:00',
      
        Options: {
          'AmazonSideAsn': 64520,
          'AutoAcceptSharedAttachments': 'enable',
          'DefaultRouteTableAssociation': 'enable',
          'AssociationDefaultRouteTableId': 'tgw-rtb-tgwrtbtestf24d42b',
          'DefaultRouteTablePropagation': 'enable',
          'PropagationDefaultRouteTableId': 'tgw-rtb-tgwrtbtestf24d42b',
          'VpnEcmpSupport': 'enable',
          'DnsSupport': 'enable'
        },
        Tag: [
          {
            'Key': 'Name',
            'Value': 'US_WEST-1-TGW'
          }
        ]
      },
      'type': 'TG',
      'region': 'us-west-1'
    },
    {
      id: 'vpc-12323232',
      shape: 'image',
      image: '/assets/images/aws/vpc.png',
      details: {
        'CidrBlock': '172.31.0.0/16',
        'DhcpOptionsId': 'dopt-60584f07',
        'State': 'available',
        'VpcId': 'vpc-12323232',
        'OwnerId': 'arntgw123',
        'InstanceTenancy': 'default',
        'CidrBlockAssociationSet': [
          {
            'AssociationId': 'vpc-cidr-assoc-a276bbc9',
            'CidrBlock': '172.31.0.0/16',
            'CidrBlockState': {
              'State': 'associated'
            }
          }
        ],
        'IsDefault': true
      },
      'type': 'VPC',
      'region': 'us-west-1'
    },
    {
      id: 'vpc-asdf98324sdf61231',
      shape: 'image',
      image: '/assets/images/aws/vpc.png',
      details: {
        'CidrBlock': '10.175.0.0/16',
        'DhcpOptionsId': 'dopt-60584f07',
        'State': 'available',
        'VpcId': 'vpc-asdf98324sdf61231',
        'OwnerId': 'arntgw123',
        'InstanceTenancy': 'default',
        'CidrBlockAssociationSet': [
          {
            'AssociationId': 'vpc-cidr-assoc-0d99729385853edf4',
            'CidrBlock': '10.175.0.0/16',
            'CidrBlockState': {
              'State': 'associated'
            }
          }
        ],
        'IsDefault': false,
        Tag: [
          {
            'Key': 'Name',
            'Value': 'TGW-HUB'
          }
        ]
      },
      'type': 'VPC',
      'region': 'us-west-1'
    },
    {
      id: 'igw-abc3123ad823ja733',
      shape: 'image',
      image: '/assets/images/aws/igw.png',
      details: {
       
        'InternetGatewayId': 'igw-abc3123ad823ja733',
        'OwnerId': 'arntgw123',
        Tag: [
          {
            'Key': 'Name',
            'Value': 'MQ-NW-IGW'
          }
        ]
      },
      'type': 'IGW',
      'region': 'us-west-1'
    },
    {
      id: 'igw-b93329dd',
      shape: 'image',
      image: '/assets/images/aws/igw.png',
      details: {
        'Attachments': [
          {
            'State': 'available',
            'VpcId': 'vpc-12323232'
          }
        ],
        'InternetGatewayId': 'igw-b93329dd',
        'OwnerId': 'arntgw123',
        Tag: []
      },
      'type': 'IGW',
      'region': 'us-west-1'
    },
    {
      id: 'cgw-test314ersdfasdsd',
      shape: 'image',
      image: '/assets/images/aws/customergw.png',
      details: {
        'BgpAsn': '64512',
        'CustomerGatewayId': 'cgw-test314ersdfasdsd',
        'IpAddress': '63.80.198.234',
        'State': 'available',
        'Type': 'ipsec.1',
        Tag: [
          {
            'Key': 'Name',
            'Value': 'SJC_10G_CGW_B'
          }
        ]
      },
      'type': 'CustomerGW',
      'region': 'us-west-1'
    },
    {
      id: 'cgw-34dsfksdf7234kdfu',
      shape: 'image',
      image: '/assets/images/aws/customergw.png',
      details: {
        'BgpAsn': '64512',
        'CustomerGatewayId': 'cgw-34dsfksdf7234kdfu',
        'IpAddress': '23.42.123.123',
        'State': 'available',
        'Type': 'ipsec.1',
        Tag: [
          {
            'Key': 'Name',
            'Value': 'SJC_10G_CGW-A'
          }
        ]
      },
      'type': 'CustomerGW',
      'region': 'us-west-1'
    },
    {
      id: 'cgw-04abe5908e46a1c71',
      shape: 'image',
      image: '/assets/images/aws/customergw.png',
      details: {
        'BgpAsn': '65000',
        'CustomerGatewayId': 'cgw-04abe5908e46a1c71',
        'IpAddress': '39.22.123.12',
        'State': 'available',
        'Type': 'ipsec.1',
        'DeviceName': 'SJEQ05FW01',
        Tag: [
          {
            'Key': 'Name',
            'Value': 'SJC_CGW-A'
          }
        ]
      },
      'type': 'CustomerGW',
      'region': 'us-west-1'
    },
    {
      id: 'a0cb33f1-da2c-4b16-94b9-09cf843d672f',
      shape: 'image',
      image: '/assets/images/aws/directconnectgw.png',
      details: {
        'BgpAsn': '65000',
        'CustomerGatewayId': 'cgw-012ffe04137142074',
        'IpAddress': '39.22.123.12',
        'State': 'available',
        'Type': 'ipsec.1',
        Tag: [
          {
            'Key': 'Name',
            'Value': 'SJC_CGW-A'
          }
        ]
      },
      'type': 'directconnectGW',
      'region': 'us-west-2'
    },
    {
      id: 'i-0f83be87b36dda139',
      shape: 'image',
      image: '/assets/images/aws/ec2machine.png',
      'data': {
        'InstanceType': 't2.micro',
        'PrivateDnsName': 'ip-10-175-20-21.us-west-1.compute.internal',
        'PrivateIpAddress': '10.175.20.21',
        'VpcId': 'vpc-asdf98324sdf61231'
      }
    },
    {
      id: 'tgw-0fc2cc1f4a0884ba1',
      shape: 'image',
      image: '/assets/images/aws/transitgateway.png',
      details: {
        'TransitGatewayId': 'tgw-0fc2cc1f4a0884ba1',
        'TransitGatewayArn': 'arn:aws:ec2:us-west-2:arntgw123:transit-gateway/tgw-0fc2cc1f4a0884ba1',
        'State': 'available',
        'OwnerId': 'arntgw123',
        'CreationTime': '2020-02-19 22:37:39+00:00',
        Options: {
          'AmazonSideAsn': 64520,
          'AutoAcceptSharedAttachments': 'enable',
          'DefaultRouteTableAssociation': 'enable',
          'AssociationDefaultRouteTableId': 'tgw-rtb-test213232176me59',
          'DefaultRouteTablePropagation': 'enable',
          'PropagationDefaultRouteTableId': 'tgw-rtb-test213232176me59',
          'VpnEcmpSupport': 'enable',
          'DnsSupport': 'enable'
        },
        Tag: [
          {
            'Key': 'Name',
            'Value': 'US_WEST-2-TGW'
          }
        ]
      },
      'type': 'TG',
      'region': 'us-west-2'
    },
    {
      id: 'vpc-0eb3d87301888b642',
      shape: 'image',
      image: '/assets/images/aws/vpc.png',
      details: {
        'CidrBlock': '10.176.0.0/16',
        'DhcpOptionsId': 'dopt-919c08e9',
        'State': 'available',
        'VpcId': 'vpc-0eb3d87301888b642',
        'OwnerId': 'arntgw123',
        'InstanceTenancy': 'default',
        'CidrBlockAssociationSet': [
          {
            'AssociationId': 'vpc-cidr-assoc-a934kdf8241283840',
            'CidrBlock': '10.176.0.0/16',
            'CidrBlockState': {
              'State': 'associated'
            }
          }
        ],
        'IsDefault': false,
        Tag: [
          {
            'Key': 'Name',
            'Value': 'TGW-HUB'
          }
        ]
      },
      'type': 'VPC',
      'region': 'us-west-2'
    },
    {
      id: 'vpc-6d5fc015',
      shape: 'image',
      image: '/assets/images/aws/vpc.png',
      details: {
        'CidrBlock': '172.31.0.0/16',
        'DhcpOptionsId': 'dopt-919c08e9',
        'State': 'available',
        'VpcId': 'vpc-6d5fc015',
        'OwnerId': 'arntgw123',
        'InstanceTenancy': 'default',
        'CidrBlockAssociationSet': [
          {
            'AssociationId': 'vpc-cidr-assoc-10a9837a',
            'CidrBlock': '172.31.0.0/16',
            'CidrBlockState': {
              'State': 'associated'
            }
          }
        ],
        'IsDefault': true
      },
      'type': 'VPC',
      'region': 'us-west-2'
    },
    {
      id: 'igw-123asdfadfasdfuia',
      shape: 'image',
      image: '/assets/images/aws/igw.png',
      details: {
        'Attachments': [
          {
            'State': 'available',
            'VpcId': 'vpc-0eb3d87301888b642'
          }
        ],
        'InternetGatewayId': 'igw-123asdfadfasdfuia',
        'OwnerId': 'arntgw123',
        Tag: [
          {
            'Key': 'Name',
            'Value': 'MQ-NW-IGW'
          }
        ]
      },
      'type': 'IGW',
      'region': 'us-west-2'
    },
    {
      id: 'igw-804f8ef9',
      shape: 'image',
      image: '/assets/images/aws/igw.png',
      details: {
        'Attachments': [
          {
            'State': 'available',
            'VpcId': 'vpc-6d5fc015'
          }
        ],
        'InternetGatewayId': 'igw-804f8ef9',
        'OwnerId': 'arntgw123',
        Tag: []
      },
      'type': 'IGW',
      'region': 'us-west-2'
    },
    {
      id: 'cgw-012ffe04137142074',
      shape: 'image',
      image: '/assets/images/aws/customergw.png',
      details: {
        'BgpAsn': '65000',
        'CustomerGatewayId': 'cgw-012ffe04137142074',
        'IpAddress': '39.22.123.12',
        'State': 'available',
        'Type': 'ipsec.1',
        Tag: [
          {
            'Key': 'Name',
            'Value': 'SJC_CGW-A'
          }
        ]
      },
      'type': 'CustomerGW',
      'region': 'us-west-2'
    },
    {
      id: 'tgw-0244843c60420aafe',
      shape: 'image',
      image: '/assets/images/aws/transitgateway.png'
    },
    {
      id: 'tgw-07258c07b4e7c78fe',
      shape: 'image',
      image: '/assets/images/aws/transitgateway.png'
    },
    {
      id: 'vpc-0f6bf1fa6d5c67ed5',
      shape: 'image',
      image: '/assets/images/aws/vpc.png'
    },
    {
      id: 'vpc-0534ed9c0d0220eb2',
      shape: 'image',
      image: '/assets/images/aws/vpc.png'
    },
    {
      id: 'vpc-0c71c5f9f003c5099',
      shape: 'image',
      image: '/assets/images/aws/vpc.png'
    },
    {
      id: 'vpc-0e106a90cf5f32bdc',
      shape: 'image',
      image: '/assets/images/aws/vpc.png'
    },
    {
      id: 'vpn-04e016c0adcae606d',
      shape: 'image',
      image: '/assets/images/aws/vpn.png'
    }
  ];
  'edges': [
    {
      'from': 'igw-abc3123ad823ja733',
      'to': 'vpc-asdf98324sdf61231',
      'type': 'vpc-igw',
      'data': {
        id: 'igw-abc3123ad823ja733',
        'description': ''
      }
    },
    {
      'from': 'igw-b93329dd',
      'to': 'vpc-12323232',
      'type': 'vpc-igw',
      'data': {
        id: 'igw-b93329dd',
        'description': ''
      }
    },
    {
      'from': 'igw-123asdfadfasdfuia',
      'to': 'vpc-0eb3d87301888b642',
      'type': 'vpc-igw',
      'data': {
        'id': 'igw-123asdfadfasdfuia',
        'description': ''
      }
    },
    {
      'from': 'igw-804f8ef9',
      'to': 'vpc-6d5fc015',
      'type': 'vpc-igw',
      'data': {
        'id': 'igw-804f8ef9',
        'description': ''
      }
    },
    {
      'from': 'tgw-0fc2cc1f4a0884ba1',
      'to': 'tgw-0244843c60420aafe',
      'type': 'peering',
      'data': {
        'id': 'tgw-attach-0a5a38c1fae94b5cb',
        'description': ''
      }
    },
    {
      'from': 'tgw-0fc2cc1f4a0884ba1',
      'to': 'tgw-07258c07b4e7c78fe',
      'type': 'peering',
      'data': {
        'id': 'tgw-attach-0bcce7f56eaf72b6d',
        'description': ''
      }
    },
    {
      'from': 'tgw-0fc2cc1f4a0884ba1',
      'to': 'vpc-0f6bf1fa6d5c67ed5',
      'type': 'vpc',
      'data': {
        'id': 'tgw-attach-023ebc6c6540f9cf8',
        'description': ''
      }
    },
    {
      'from': 'tgw-0fc2cc1f4a0884ba1',
      'to': 'vpc-0534ed9c0d0220eb2',
      'type': 'vpc',
      'data': {
        'id': 'tgw-attach-044b373b412c845b6',
        'description': ''
      }
    },
    {
      'from': 'tgw-0fc2cc1f4a0884ba1',
      'to': 'vpc-0eb3d87301888b642',
      'type': 'vpc',
      'data': {
        'id': 'tgw-attach-062509d05dec0d8ba',
        'description': ''
      }
    },
    {
      'from': 'tgw-0fc2cc1f4a0884ba1',
      'to': 'vpc-0c71c5f9f003c5099',
      'type': 'vpc',
      'data': {
        'id': 'tgw-attach-07c349ae565ab4df3',
        'description': ''
      }
    },
    {
      'from': 'tgw-0fc2cc1f4a0884ba1',
      'to': 'vpc-0e106a90cf5f32bdc',
      'type': 'vpc',
      'data': {
        'id': 'tgw-attach-0ee98c674c5fb6b14',
        'description': ''
      }
    },
    {
      'from': 'tgw-0fc2cc1f4a0884ba1',
      'to': 'vpn-04e016c0adcae606d',
      'type': 'vpn',
      'data': {
        'id': 'tgw-attach-03092d46e9e2d3141',
        'description': ''
      }
    }
  ]
  displayedColumns: string[] = ['id', 'type', 'region', 'details'];
  datasource=this.nodes;
  change()
  {
    this.isShow=!this.isShow;
  }

}



//  toggleDisplay()
 // {
   // this.isShow= !this.isShow;
 // }
 
//  det= this.nodes.details;



  /*  getDetails(){
  this.nodes.forEach((node)=>{
    console.log(node.details);
   });
  }
  */



 // getdetails()
  //{
   // this.nodes.forEach((node)=>{
    // this.det= node.details);
  // });
  
    
   // alert("details found successfully");
    //console.log(this.nodes[0].details);

  

